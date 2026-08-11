import type { ProspectRecord } from "../prospect/[id]/prospectTypes";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export type SavedProspectsQuery = {
  page: number;
  pageSize: number;
  search: string;
  status: string;
};

export type SavedProspectsPage = {
  rows: ProspectRecord[];
  totalCount: number;
};


/**
 * Escape a value for PostgREST filter grammar used inside `or=(...)`.
 * Strips/neutralizes characters that change expression structure.
 */
export function escapePostgrestValue(value: string): string {
  return value
    .replace(/\\/g, "")
    .replace(/"/g, "")
    .replace(/[(),.*]/g, " ")
    .replace(/,/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function createBaseUrl() {
  return new URL("/rest/v1/saved_analyses", supabaseUrl);
}

function applyFilters(url: URL, query: SavedProspectsQuery) {
  if (query.search.trim()) {
    const term = escapePostgrestValue(query.search);
    if (term) {
      url.searchParams.set(
        "or",
        `(title.ilike.*${term}*,domain.ilike.*${term}*,url.ilike.*${term}*)`,
      );
    }
  }

  if (query.status !== "all") {
    url.searchParams.set("prospect_status", `eq.${query.status}`);
  }
}

export async function fetchSavedProspectsPage(
  accessToken: string,
  query: SavedProspectsQuery,
): Promise<SavedProspectsPage> {
  const url = createBaseUrl();
  url.searchParams.set(
    "select",
    [
      "id",
      "title",
      "domain",
      "url",
      "description",
      "prospect_status",
      "created_at",
      "watch_enabled",
      "last_checked_at",
      // A count of undismissed changes, embedded through the
      // prospect_changes_saved_analysis_id_fkey relationship. The list only
      // needs to know that something moved, so this stays a count rather than
      // pulling every row for every prospect on the page.
      "prospect_changes(count)",
    ].join(","),
  );
  url.searchParams.set("prospect_changes.dismissed_at", "is.null");
  url.searchParams.set("order", "created_at.desc");
  url.searchParams.set("limit", String(query.pageSize));
  url.searchParams.set("offset", String((query.page - 1) * query.pageSize));
  applyFilters(url, query);

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      apikey: supabaseAnonKey,
      Prefer: "count=exact",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to load saved prospects");
  }

  const rangeHeader = response.headers.get("content-range");
  const totalCount = rangeHeader ? Number(rangeHeader.split("/")[1]) || 0 : 0;

  return {
    rows: (await response.json()) as ProspectRecord[],
    totalCount,
  };
}

export async function fetchSavedProspectsExportRows(
  accessToken: string,
  query: Omit<SavedProspectsQuery, "page" | "pageSize">,
): Promise<ProspectRecord[]> {
  const url = createBaseUrl();
  url.searchParams.set(
    "select",
    [
      "id",
      "title",
      "domain",
      "url",
      "description",
      "prospect_status",
      "created_at",
      "what_they_do",
      "target_customer",
      "value_proposition",
      "sales_readiness_score",
      "best_sales_persona",
      "recommended_outreach_goal",
      "recommended_outreach_angle",
      "outreach_angles",
    ].join(","),
  );
  url.searchParams.set("order", "created_at.desc");
  url.searchParams.set("limit", "5000");
  applyFilters(url, { ...query, page: 1, pageSize: 5000 });

  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      apikey: supabaseAnonKey,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to export saved prospects");
  }

  return (await response.json()) as ProspectRecord[];
}

export async function deleteSavedProspect(
  prospectId: string,
  accessToken: string,
): Promise<void> {
  const url = createBaseUrl();
  url.searchParams.set("id", `eq.${prospectId}`);

  const response = await fetch(url.toString(), {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      apikey: supabaseAnonKey,
      Prefer: "return=minimal",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete saved prospect");
  }
}

export async function deleteSavedProspects(
  prospectIds: string[],
  accessToken: string,
): Promise<void> {
  const ids = prospectIds.filter(Boolean);
  if (!ids.length) return;

  const url = createBaseUrl();
  url.searchParams.set("id", `in.(${ids.join(",")})`);

  const response = await fetch(url.toString(), {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      apikey: supabaseAnonKey,
      Prefer: "return=minimal",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete saved prospects");
  }
}

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { GlobalContextProviders } from "./components/_globalContextProviders";
import Page_0 from "./pages/hr.tsx";
import PageLayout_0 from "./pages/hr.pageLayout.tsx";
import Page_1 from "./pages/team.tsx";
import PageLayout_1 from "./pages/team.pageLayout.tsx";
import Page_2 from "./pages/brief.tsx";
import PageLayout_2 from "./pages/brief.pageLayout.tsx";
import Page_3 from "./pages/goals.tsx";
import PageLayout_3 from "./pages/goals.pageLayout.tsx";
import Page_4 from "./pages/login.tsx";
import PageLayout_4 from "./pages/login.pageLayout.tsx";
import Page_5 from "./pages/sales.tsx";
import PageLayout_5 from "./pages/sales.pageLayout.tsx";
import Page_6 from "./pages/_index.tsx";
import PageLayout_6 from "./pages/_index.pageLayout.tsx";
import Page_7 from "./pages/access.tsx";
import PageLayout_7 from "./pages/access.pageLayout.tsx";
import Page_8 from "./pages/offers.tsx";
import PageLayout_8 from "./pages/offers.pageLayout.tsx";
import Page_9 from "./pages/clients.tsx";
import PageLayout_9 from "./pages/clients.pageLayout.tsx";
import Page_10 from "./pages/finance.tsx";
import PageLayout_10 from "./pages/finance.pageLayout.tsx";
import Page_11 from "./pages/manager.tsx";
import PageLayout_11 from "./pages/manager.pageLayout.tsx";
import Page_12 from "./pages/payroll.tsx";
import PageLayout_12 from "./pages/payroll.pageLayout.tsx";
import Page_13 from "./pages/reports.tsx";
import PageLayout_13 from "./pages/reports.pageLayout.tsx";
import Page_14 from "./pages/reviews.tsx";
import PageLayout_14 from "./pages/reviews.pageLayout.tsx";
import Page_15 from "./pages/hr-admin.tsx";
import PageLayout_15 from "./pages/hr-admin.pageLayout.tsx";
import Page_16 from "./pages/meetings.tsx";
import PageLayout_16 from "./pages/meetings.pageLayout.tsx";
import Page_17 from "./pages/projects.tsx";
import PageLayout_17 from "./pages/projects.pageLayout.tsx";
import Page_18 from "./pages/settings.tsx";
import PageLayout_18 from "./pages/settings.pageLayout.tsx";
import Page_19 from "./pages/documents.tsx";
import PageLayout_19 from "./pages/documents.pageLayout.tsx";
import Page_20 from "./pages/hr-policy.tsx";
import PageLayout_20 from "./pages/hr-policy.pageLayout.tsx";
import Page_21 from "./pages/workspace.tsx";
import PageLayout_21 from "./pages/workspace.pageLayout.tsx";
import Page_22 from "./pages/leadership.tsx";
import PageLayout_22 from "./pages/leadership.pageLayout.tsx";
import Page_23 from "./pages/onboarding.tsx";
import PageLayout_23 from "./pages/onboarding.pageLayout.tsx";
import Page_24 from "./pages/petty-cash.tsx";
import PageLayout_24 from "./pages/petty-cash.pageLayout.tsx";
import Page_25 from "./pages/recruitment.tsx";
import PageLayout_25 from "./pages/recruitment.pageLayout.tsx";
import Page_26 from "./pages/my-documents.tsx";
import PageLayout_26 from "./pages/my-documents.pageLayout.tsx";
import Page_27 from "./pages/daily-updates.tsx";
import PageLayout_27 from "./pages/daily-updates.pageLayout.tsx";
import Page_28 from "./pages/ledger-report.tsx";
import PageLayout_28 from "./pages/ledger-report.pageLayout.tsx";
import Page_29 from "./pages/profitability.tsx";
import PageLayout_29 from "./pages/profitability.pageLayout.tsx";
import Page_30 from "./pages/company-ledger.tsx";
import PageLayout_30 from "./pages/company-ledger.pageLayout.tsx";
import Page_31 from "./pages/sales-invoices.tsx";
import PageLayout_31 from "./pages/sales-invoices.pageLayout.tsx";
import Page_32 from "./pages/director-actions.tsx";
import PageLayout_32 from "./pages/director-actions.pageLayout.tsx";
import Page_33 from "./pages/manager-team-control.tsx";
import PageLayout_33 from "./pages/manager-team-control.pageLayout.tsx";

if (!window.requestIdleCallback) {
  window.requestIdleCallback = (cb) => {
    setTimeout(cb, 1);
  };
}

import "./base.css";

const fileNameToRoute = new Map([["./pages/hr.tsx","/hr"],["./pages/team.tsx","/team"],["./pages/brief.tsx","/brief"],["./pages/goals.tsx","/goals"],["./pages/login.tsx","/login"],["./pages/sales.tsx","/sales"],["./pages/_index.tsx","/"],["./pages/access.tsx","/access"],["./pages/offers.tsx","/offers"],["./pages/clients.tsx","/clients"],["./pages/finance.tsx","/finance"],["./pages/manager.tsx","/manager"],["./pages/payroll.tsx","/payroll"],["./pages/reports.tsx","/reports"],["./pages/reviews.tsx","/reviews"],["./pages/hr-admin.tsx","/hr-admin"],["./pages/meetings.tsx","/meetings"],["./pages/projects.tsx","/projects"],["./pages/settings.tsx","/settings"],["./pages/documents.tsx","/documents"],["./pages/hr-policy.tsx","/hr-policy"],["./pages/workspace.tsx","/workspace"],["./pages/leadership.tsx","/leadership"],["./pages/onboarding.tsx","/onboarding"],["./pages/petty-cash.tsx","/petty-cash"],["./pages/recruitment.tsx","/recruitment"],["./pages/my-documents.tsx","/my-documents"],["./pages/daily-updates.tsx","/daily-updates"],["./pages/ledger-report.tsx","/ledger-report"],["./pages/profitability.tsx","/profitability"],["./pages/company-ledger.tsx","/company-ledger"],["./pages/sales-invoices.tsx","/sales-invoices"],["./pages/director-actions.tsx","/director-actions"],["./pages/manager-team-control.tsx","/manager-team-control"]]);
const fileNameToComponent = new Map([
    ["./pages/hr.tsx", Page_0],
["./pages/team.tsx", Page_1],
["./pages/brief.tsx", Page_2],
["./pages/goals.tsx", Page_3],
["./pages/login.tsx", Page_4],
["./pages/sales.tsx", Page_5],
["./pages/_index.tsx", Page_6],
["./pages/access.tsx", Page_7],
["./pages/offers.tsx", Page_8],
["./pages/clients.tsx", Page_9],
["./pages/finance.tsx", Page_10],
["./pages/manager.tsx", Page_11],
["./pages/payroll.tsx", Page_12],
["./pages/reports.tsx", Page_13],
["./pages/reviews.tsx", Page_14],
["./pages/hr-admin.tsx", Page_15],
["./pages/meetings.tsx", Page_16],
["./pages/projects.tsx", Page_17],
["./pages/settings.tsx", Page_18],
["./pages/documents.tsx", Page_19],
["./pages/hr-policy.tsx", Page_20],
["./pages/workspace.tsx", Page_21],
["./pages/leadership.tsx", Page_22],
["./pages/onboarding.tsx", Page_23],
["./pages/petty-cash.tsx", Page_24],
["./pages/recruitment.tsx", Page_25],
["./pages/my-documents.tsx", Page_26],
["./pages/daily-updates.tsx", Page_27],
["./pages/ledger-report.tsx", Page_28],
["./pages/profitability.tsx", Page_29],
["./pages/company-ledger.tsx", Page_30],
["./pages/sales-invoices.tsx", Page_31],
["./pages/director-actions.tsx", Page_32],
["./pages/manager-team-control.tsx", Page_33],
  ]);

function makePageRoute(filename: string) {
  const Component = fileNameToComponent.get(filename);
  return <Component />;
}

function toElement({
  trie,
  fileNameToRoute,
  makePageRoute,
}: {
  trie: LayoutTrie;
  fileNameToRoute: Map<string, string>;
  makePageRoute: (filename: string) => React.ReactNode;
}) {
  return [
    ...trie.topLevel.map((filename) => (
      <Route
        key={fileNameToRoute.get(filename)}
        path={fileNameToRoute.get(filename)}
        element={makePageRoute(filename)}
      />
    )),
    ...Array.from(trie.trie.entries()).map(([Component, child], index) => (
      <Route
        key={index}
        element={
          <Component>
            <Outlet />
          </Component>
        }
      >
        {toElement({ trie: child, fileNameToRoute, makePageRoute })}
      </Route>
    )),
  ];
}

type LayoutTrieNode = Map<
  React.ComponentType<{ children: React.ReactNode }>,
  LayoutTrie
>;
type LayoutTrie = { topLevel: string[]; trie: LayoutTrieNode };
function buildLayoutTrie(layouts: {
  [fileName: string]: React.ComponentType<{ children: React.ReactNode }>[];
}): LayoutTrie {
  const result: LayoutTrie = { topLevel: [], trie: new Map() };
  Object.entries(layouts).forEach(([fileName, components]) => {
    let cur: LayoutTrie = result;
    for (const component of components) {
      if (!cur.trie.has(component)) {
        cur.trie.set(component, {
          topLevel: [],
          trie: new Map(),
        });
      }
      cur = cur.trie.get(component)!;
    }
    cur.topLevel.push(fileName);
  });
  return result;
}

function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>Go back to the <a href="/" style={{ color: 'blue' }}>home page</a>.</p>
    </div>
  );
}

import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, search, hash } = useLocation();
  const navType = useNavigationType(); // "PUSH" | "REPLACE" | "POP"

  useEffect(() => {
    // Back/forward: keep browser-like behavior
    if (navType === "POP") return;

    // Hash links: let the browser scroll to the anchor
    if (hash) return;

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, search, hash, navType]);

  return null;
}

export function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: false, v7_relativeSplatPath: false }}>
      <ScrollManager />
      <GlobalContextProviders>
        <Routes>
          {toElement({ trie: buildLayoutTrie({
"./pages/hr.tsx": PageLayout_0,
"./pages/team.tsx": PageLayout_1,
"./pages/brief.tsx": PageLayout_2,
"./pages/goals.tsx": PageLayout_3,
"./pages/login.tsx": PageLayout_4,
"./pages/sales.tsx": PageLayout_5,
"./pages/_index.tsx": PageLayout_6,
"./pages/access.tsx": PageLayout_7,
"./pages/offers.tsx": PageLayout_8,
"./pages/clients.tsx": PageLayout_9,
"./pages/finance.tsx": PageLayout_10,
"./pages/manager.tsx": PageLayout_11,
"./pages/payroll.tsx": PageLayout_12,
"./pages/reports.tsx": PageLayout_13,
"./pages/reviews.tsx": PageLayout_14,
"./pages/hr-admin.tsx": PageLayout_15,
"./pages/meetings.tsx": PageLayout_16,
"./pages/projects.tsx": PageLayout_17,
"./pages/settings.tsx": PageLayout_18,
"./pages/documents.tsx": PageLayout_19,
"./pages/hr-policy.tsx": PageLayout_20,
"./pages/workspace.tsx": PageLayout_21,
"./pages/leadership.tsx": PageLayout_22,
"./pages/onboarding.tsx": PageLayout_23,
"./pages/petty-cash.tsx": PageLayout_24,
"./pages/recruitment.tsx": PageLayout_25,
"./pages/my-documents.tsx": PageLayout_26,
"./pages/daily-updates.tsx": PageLayout_27,
"./pages/ledger-report.tsx": PageLayout_28,
"./pages/profitability.tsx": PageLayout_29,
"./pages/company-ledger.tsx": PageLayout_30,
"./pages/sales-invoices.tsx": PageLayout_31,
"./pages/director-actions.tsx": PageLayout_32,
"./pages/manager-team-control.tsx": PageLayout_33,
}), fileNameToRoute, makePageRoute })} 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </GlobalContextProviders>
    </BrowserRouter>
  );
}

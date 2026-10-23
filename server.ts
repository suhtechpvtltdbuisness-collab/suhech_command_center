import "./loadEnv.js";
import { Hono } from 'hono'
import { serveStatic } from '@hono/node-server/serve-static'
import { serve } from '@hono/node-server';

const app = new Hono();

app.get('_api/hr',async c => {
  try {
    const { handle } = await import("./endpoints/hr_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/team',async c => {
  try {
    const { handle } = await import("./endpoints/team_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/goals',async c => {
  try {
    const { handle } = await import("./endpoints/goals_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/sales',async c => {
  try {
    const { handle } = await import("./endpoints/sales_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/work',async c => {
  try {
    const { handle } = await import("./endpoints/work_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/alerts',async c => {
  try {
    const { handle } = await import("./endpoints/alerts_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/offers',async c => {
  try {
    const { handle } = await import("./endpoints/offers_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/clients',async c => {
  try {
    const { handle } = await import("./endpoints/clients_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/finance',async c => {
  try {
    const { handle } = await import("./endpoints/finance_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/manage',async c => {
  try {
    const { handle } = await import("./endpoints/manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/payroll',async c => {
  try {
    const { handle } = await import("./endpoints/payroll_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/reviews',async c => {
  try {
    const { handle } = await import("./endpoints/reviews_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/hr_admin',async c => {
  try {
    const { handle } = await import("./endpoints/hr_admin_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/projects',async c => {
  try {
    const { handle } = await import("./endpoints/projects_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/settings',async c => {
  try {
    const { handle } = await import("./endpoints/settings_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/analytics',async c => {
  try {
    const { handle } = await import("./endpoints/analytics_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/dashboard',async c => {
  try {
    const { handle } = await import("./endpoints/dashboard_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/executive',async c => {
  try {
    const { handle } = await import("./endpoints/executive_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/hr_policy',async c => {
  try {
    const { handle } = await import("./endpoints/hr_policy_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/hr_manage',async c => {
  try {
    const { handle } = await import("./endpoints/hr_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/leadership',async c => {
  try {
    const { handle } = await import("./endpoints/leadership_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/onboarding',async c => {
  try {
    const { handle } = await import("./endpoints/onboarding_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/petty_cash',async c => {
  try {
    const { handle } = await import("./endpoints/petty_cash_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/agent/stop',async c => {
  try {
    const { handle } = await import("./endpoints/agent/stop_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/escalation',async c => {
  try {
    const { handle } = await import("./endpoints/escalation_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/performance',async c => {
  try {
    const { handle } = await import("./endpoints/performance_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/petty_cash',async c => {
  try {
    const { handle } = await import("./endpoints/petty_cash_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/recruitment',async c => {
  try {
    const { handle } = await import("./endpoints/recruitment_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/access_admin',async c => {
  try {
    const { handle } = await import("./endpoints/access_admin_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/auth/logout',async c => {
  try {
    const { handle } = await import("./endpoints/auth/logout_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/auth/session',async c => {
  try {
    const { handle } = await import("./endpoints/auth/session_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/goal_manage',async c => {
  try {
    const { handle } = await import("./endpoints/goal_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/my_workspace',async c => {
  try {
    const { handle } = await import("./endpoints/my_workspace_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/task_review',async c => {
  try {
    const { handle } = await import("./endpoints/task_review_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/task_update',async c => {
  try {
    const { handle } = await import("./endpoints/task_update_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/team_update',async c => {
  try {
    const { handle } = await import("./endpoints/team_update_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/access_admin',async c => {
  try {
    const { handle } = await import("./endpoints/access_admin_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/daily_updates',async c => {
  try {
    const { handle } = await import("./endpoints/daily_updates_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/ledger_report',async c => {
  try {
    const { handle } = await import("./endpoints/ledger_report_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/offer_manage',async c => {
  try {
    const { handle } = await import("./endpoints/offer_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/profitability',async c => {
  try {
    const { handle } = await import("./endpoints/profitability_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/sales_manage',async c => {
  try {
    const { handle } = await import("./endpoints/sales_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/client_manage',async c => {
  try {
    const { handle } = await import("./endpoints/client_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/company_ledger',async c => {
  try {
    const { handle } = await import("./endpoints/company_ledger_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/director_brief',async c => {
  try {
    const { handle } = await import("./endpoints/director_brief_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/messages/send',async c => {
  try {
    const { handle } = await import("./endpoints/messages/send_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/my_acceptance',async c => {
  try {
    const { handle } = await import("./endpoints/my_acceptance_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/my_acceptances',async c => {
  try {
    const { handle } = await import("./endpoints/my_acceptances_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/review_manage',async c => {
  try {
    const { handle } = await import("./endpoints/review_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/_realtime/send',async c => {
  try {
    const { handle } = await import("./endpoints/_realtime/send_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/bank_reconcile',async c => {
  try {
    const { handle } = await import("./endpoints/bank_reconcile_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/finance_manage',async c => {
  try {
    const { handle } = await import("./endpoints/finance_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/manager_control',async c => {
  try {
    const { handle } = await import("./endpoints/manager_control_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/payroll_manage',async c => {
  try {
    const { handle } = await import("./endpoints/payroll_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/project_manage',async c => {
  try {
    const { handle } = await import("./endpoints/project_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/_realtime/token',async c => {
  try {
    const { handle } = await import("./endpoints/_realtime/token_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/director_actions',async c => {
  try {
    const { handle } = await import("./endpoints/director_actions_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/hr_admin_manage',async c => {
  try {
    const { handle } = await import("./endpoints/hr_admin_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/meeting_control',async c => {
  try {
    const { handle } = await import("./endpoints/meeting_control_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/meetings_control',async c => {
  try {
    const { handle } = await import("./endpoints/meetings_control_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/messages/upload',async c => {
  try {
    const { handle } = await import("./endpoints/messages/upload_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/my_notifications',async c => {
  try {
    const { handle } = await import("./endpoints/my_notifications_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/self_attendance',async c => {
  try {
    const { handle } = await import("./endpoints/self_attendance_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/settings_manage',async c => {
  try {
    const { handle } = await import("./endpoints/settings_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/agent/reactivate',async c => {
  try {
    const { handle } = await import("./endpoints/agent/reactivate_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/company_documents',async c => {
  try {
    const { handle } = await import("./endpoints/company_documents_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/hr_policy_manage',async c => {
  try {
    const { handle } = await import("./endpoints/hr_policy_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/leadership_manage',async c => {
  try {
    const { handle } = await import("./endpoints/leadership_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/onboarding_manage',async c => {
  try {
    const { handle } = await import("./endpoints/onboarding_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/push_subscription',async c => {
  try {
    const { handle } = await import("./endpoints/push_subscription_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/_realtime/lastseen',async c => {
  try {
    const { handle } = await import("./endpoints/_realtime/lastseen_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/recruitment_manage',async c => {
  try {
    const { handle } = await import("./endpoints/recruitment_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/auth/bootstrap_status',async c => {
  try {
    const { handle } = await import("./endpoints/auth/bootstrap_status_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/daily_updates_manage',async c => {
  try {
    const { handle } = await import("./endpoints/daily_updates_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/my_employee_document',async c => {
  try {
    const { handle } = await import("./endpoints/my_employee_document_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/profitability_manage',async c => {
  try {
    const { handle } = await import("./endpoints/profitability_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/bank_statement_import',async c => {
  try {
    const { handle } = await import("./endpoints/bank_statement_import_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/bank_statement_upload',async c => {
  try {
    const { handle } = await import("./endpoints/bank_statement_upload_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/company_ledger_manage',async c => {
  try {
    const { handle } = await import("./endpoints/company_ledger_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/employee_document_view',async c => {
  try {
    const { handle } = await import("./endpoints/employee_document_view_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/company_document_manage',async c => {
  try {
    const { handle } = await import("./endpoints/company_document_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/director_actions_manage',async c => {
  try {
    const { handle } = await import("./endpoints/director_actions_manage_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/management_notification',async c => {
  try {
    const { handle } = await import("./endpoints/management_notification_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/auth/login_with_password',async c => {
  try {
    const { handle } = await import("./endpoints/auth/login_with_password_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/employee_document_upload',async c => {
  try {
    const { handle } = await import("./endpoints/employee_document_upload_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/auth/register_with_password',async c => {
  try {
    const { handle } = await import("./endpoints/auth/register_with_password_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/petty_cash_fund',async c => {
  try {
    const { handle } = await import("./endpoints/petty_cash_fund_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.post('_api/attendance_clock',async c => {
  try {
    const { handle } = await import("./endpoints/attendance_clock_POST.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.get('_api/attendance_presence',async c => {
  try {
    const { handle } = await import("./endpoints/attendance_presence_GET.js");
    let request = c.req.raw;
    const response = await handle(request);
    if (!(response instanceof Response) && response.constructor.name !== "Response") {
      return c.text("Invalid response format. handle should always return a Response object." + response.constructor.name, 500);
    }
    return response;
  } catch (e) {
    console.error(e);
    return c.text("Error loading endpoint code " + e.message,  500)
  }
})
app.use("/*", serveStatic({ root: "./static" }));
app.use('/*', serveStatic({ root: './dist' }))
app.get("*", async (c, next) => {
  const p = c.req.path;
  if (p.startsWith("/_api")) {
    return next();
  }
  return serveStatic({ path: "./dist/index.html" })(c, next);
});
serve({ fetch: app.fetch, port: 3333 });
console.log("Running at http://localhost:3333")
      
import api from "@forge/api";
import { JiraClient } from "@narthia/jira-client";

export const jiraClient = new JiraClient({
  type: "forge",
  auth: { api },
});

import { Appwrite } from "appwrite";
import { Server } from "../utils/config";

let api = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }
    let appwrite = new Appwrite();
    appwrite.setEndpoint(Server.endpoint).setProject(Server.project);
    api.sdk = appwrite;
    return appwrite;
  },


  createAccount: (email, password, name, org) => {
    return api.provider().account.create(email, password, name);
  },

  getAccount: () => {
    return api.provider().account.get();
  },

  createTeam: (team_id, name) => {
    return   api.provider().teams.create(team_id, name);
  },

  getTeams: () => {
    return api.provider().teams.list();
  },

  updateTeam: (team_id, name) => {
    return api.provider().teams.update(team_id, name);
  },

  deleteTeam: (team_id) => {
    return api.provider().teams.update(team_id);
  },

  createTeamMembership: (team_id, email, roles, url, name) => {
    return api.provider().teams.createMembership(team_id, email , roles, url, name);
  },

  getTeamMembershipList: (team_id) => {
    return api.provider().teams.getMemberships(team_id);
  },

  getTeamMembership: (team_id, team_membership_id) => {
    return api.provider().teams.getMembership(team_id, team_membership_id);
  },

  updateTeamMembership: (team_id, team_membership_id, roles) => {
    return api.provider().teams.updateMembershipRoles(team_id, team_membership_id, roles);
  },

  updateTeamMembershipStatus: (team_id, team_membership_id, user_id, secret) => {
    return api.provider().teams.updateMembershipStatus(team_id, team_membership_id, user_id, secret);
  },

  deleteTeamMembership: (team_id, team_membership_id) => {
    return api.provider().teams.updateMembershipStatus(team_id, team_membership_id);
  },

  createSession: (email, password) => {
    return api.provider().account.createSession(email, password);
  },

  deleteCurrentSession: () => {
    return api.provider().account.deleteSession('current');
  },

  createDocument: (collectionId, data, read, write) => {
    return api
      .provider()
      .database.createDocument(collectionId, data, read, write);
  },

  listDocuments: (collectionId) => {
    return api.provider().database.listDocuments(collectionId);
  },

  updateDocument: (collectionId, documentId, data, read, write) => {
    return api
      .provider()
      .database.updateDocument(collectionId, documentId, data, read, write);
  },

  deleteDocument: (collectionId, documentId) => {
    return api.provider().database.deleteDocument(collectionId, documentId);
  },
};

export default api;

import relationshipEngine, { RelationshipProfile } from "./RelationshipEngine";

export class RelationshipService {
  public getProfile(userId: string): RelationshipProfile {
    return relationshipEngine.getProfile(userId);
  }

  public getTrust(userId: string): number {
    return relationshipEngine.getProfile(userId).trust;
  }

  public getStage(userId: string) {
    return relationshipEngine.getProfile(userId).stage;
  }

  public getInteractions(userId: string): number {
    return relationshipEngine.getProfile(userId).interactions;
  }
}

const relationshipService = new RelationshipService();

export default relationshipService;

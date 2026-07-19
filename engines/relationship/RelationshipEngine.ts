export enum RelationshipStage {
  Stranger = "stranger",
  Acquaintance = "acquaintance",
  Friend = "friend",
  CloseFriend = "close_friend",
  TrustedPartner = "trusted_partner",
}

export interface RelationshipProfile {
  userId: string;
  stage: RelationshipStage;
  trust: number;
  familiarity: number;
  interactions: number;
}

export class RelationshipEngine {
  public getProfile(userId: string): RelationshipProfile {
    console.log(`Loading relationship for ${userId}`);

    return {
      userId,
      stage: RelationshipStage.Stranger,
      trust: 0,
      familiarity: 0,
      interactions: 0,
    };
  }
}

const relationshipEngine = new RelationshipEngine();

export default relationshipEngine;

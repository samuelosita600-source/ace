import personalityEngine, { PersonalityProfile } from "./PersonalityEngine";

export class PersonalityService {
  public getProfile(): PersonalityProfile {
    return personalityEngine.getProfile();
  }

  public isHumanLike(): boolean {
    return personalityEngine.getProfile().humanLike;
  }

  public isContextAware(): boolean {
    return personalityEngine.getProfile().contextAware;
  }

  public isEmotionallyIntelligent(): boolean {
    return personalityEngine.getProfile().emotionallyIntelligent;
  }

  public isRelationshipAware(): boolean {
    return personalityEngine.getProfile().relationshipAware;
  }

  public isMemoryDriven(): boolean {
    return personalityEngine.getProfile().memoryDriven;
  }

  public isPrincipleDriven(): boolean {
    return personalityEngine.getProfile().principleDriven;
  }

  public isPrivacyConscious(): boolean {
    return personalityEngine.getProfile().privacyConscious;
  }

  public isUserFirst(): boolean {
    return personalityEngine.getProfile().userFirst;
  }

  public isTrustworthy(): boolean {
    return personalityEngine.getProfile().trustworthy;
  }

  public isAuthentic(): boolean {
    return personalityEngine.getProfile().authentic;
  }
}

const personalityService = new PersonalityService();

export default personalityService;

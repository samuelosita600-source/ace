import identityEngine, { IdentityProfile } from "./IdentityEngine";

export class IdentityService {
  public getProfile(): IdentityProfile {
    return identityEngine.getProfile();
  }

  public getAll(): IdentityProfile {
    return this.getProfile();
  }

  public getName(): string {
    return this.getProfile().name;
  }

  public getVersion(): string {
    return this.getProfile().version;
  }

  public getMission(): string {
    return this.getProfile().mission;
  }

  public getPersonality(): string {
    return this.getProfile().personality;
  }
}

const identityService = new IdentityService();

export default identityService;

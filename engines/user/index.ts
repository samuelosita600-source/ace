export interface UserProfile {
  id: string;
  name: string;
  age: number | null;
  timezone: string;
  language: string;
  communicationStyle: string;
}

export class UserEngine {
  private profile: UserProfile;

  constructor() {
    this.profile = {
      id: "",
      name: "",
      age: null,
      timezone: "UTC",
      language: "English",
      communicationStyle: "Natural",
    };
  }

  public getProfile(): UserProfile {
    return this.profile;
  }

  public updateProfile(data: Partial<UserProfile>) {
    this.profile = {
      ...this.profile,
      ...data,
    };
  }

  public resetProfile() {
    this.profile = {
      id: "",
      name: "",
      age: null,
      timezone: "UTC",
      language: "English",
      communicationStyle: "Natural",
    };
  }
}

const userEngine = new UserEngine();

export default userEngine;

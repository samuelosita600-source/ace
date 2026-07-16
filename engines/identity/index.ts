import identity from "@/config/identity.json";
import personality from "@/config/personality.json";
import traits from "@/config/traits.json";

export class IdentityEngine {
  getIdentity() {
      return identity;
        }

          getPersonality() {
              return personality;
                }

                  getTraits() {
                      return traits;
                        }

                          getAll() {
                              return {
                                    identity,
                                          personality,
                                                traits,
                                                    };
                                                      }
                                                      }

                                                      export const identityEngine = new IdentityEngine();
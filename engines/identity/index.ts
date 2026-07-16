import identity from "@/config/identity.json";
import personality from "@/config/personality.json";
import traits from "@/config/traits.json";

export interface IdentityData {
  identity: typeof identity;
    personality: typeof personality;
      traits: typeof traits;
      }

      export class IdentityEngine {
        private data: IdentityData;

          constructor() {
              this.data = {
                    identity,
                          personality,
                                traits,
                                    };
                                      }

                                        public getAll(): IdentityData {
                                            return this.data;
                                              }

                                                public getIdentity() {
                                                    return this.data.identity;
                                                      }

                                                        public getTraits() {
                                                            return this.data.traits;
                                                              }

                                                                public getPersonality() {
                                                                    return this.data.personality;
                                                                      }

                                                                        public isReady(): boolean {
                                                                            return (
                                                                                  !!this.data.identity &&
                                                                                        !!this.data.personality &&
                                                                                              !!this.data.traits
                                                                                                  );
                                                                                                    }
                                                                                                    }

                                                                                                    const identityEngine = new IdentityEngine();

                                                                                                    export default identityEngine;
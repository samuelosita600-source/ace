export interface MemoryCandidate {
      content: string;
        type: string;
        }

        export class MemoryPipeline {
          public shouldRemember(memory: MemoryCandidate): boolean {
              if (memory.content.trim().length < 10) {
                    return false;
                        }

                            return true;
                              }

                                public calculateImportance(memory: MemoryCandidate): number {
                                    const length = memory.content.length;

                                        if (length > 200) return 9;
                                            if (length > 100) return 7;
                                                if (length > 50) return 5;

                                                    return 3;
                                                      }
                                                      }

                                                      const memoryPipeline = new MemoryPipeline();

                                                      export default memoryPipeline;

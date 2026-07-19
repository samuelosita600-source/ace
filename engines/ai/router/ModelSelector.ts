export class ModelSelector {
  public select(model: string): string {
    return model;
  }
}

const modelSelector = new ModelSelector();

export default modelSelector;

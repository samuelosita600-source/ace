export class ModelRouter {
  public route(model: string): string {
    return model;
  }
}

const modelRouter = new ModelRouter();

export default modelRouter;

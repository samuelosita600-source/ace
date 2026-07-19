export class ProviderHealth {
  public async check(provider: string): Promise<boolean> {
    return Boolean(provider);
  }
}

const providerHealth = new ProviderHealth();

export default providerHealth;

import Meta from '@/configs/meta';

export function toTitle(value?: string): string {
  if (!value) {
    return Meta.serviceName;
  }
  return `${value} - ${Meta.serviceName}`;
}

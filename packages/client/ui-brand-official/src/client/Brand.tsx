import { CmiAiHubMark, CmiAiHubWordmark } from '@deepseek-ai/dsh-client-ui-primitives'
import type { SidebarBrandMarkOwnerProps } from '@deepseek-ai/dsh-client-ui-sidebar/client'

/**
 * Render the CMI AI Hub mark with the presentation requested by its host surface.
 * @param props - Host-supplied mark presentation.
 * @returns the CMI AI Hub mark.
 */
export function OfficialBrandMark({ size }: SidebarBrandMarkOwnerProps) {
  return <CmiAiHubMark size={size} />
}

/**
 * Render the CMI AI Hub name artwork without its independently slotted mark.
 * @returns the CMI AI Hub name wordmark.
 */
export function OfficialBrandName() {
  return <CmiAiHubWordmark />
}

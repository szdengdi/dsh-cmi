import type { IconProps } from './icons/props.ts'

/**
 * CMI AI Hub 定制版名称字标（AIHub 定制版）。
 *
 * 替换官方 DeepSeek Harness 字标为「CMI AI Hub」文字字标，
 * 颜色跟随 currentColor（与官方字标一致，由宿主表面决定）。
 */

/**
 * Render the CMI AI Hub name wordmark.
 * @param props.size - height in px (default 24; width follows the artwork).
 * @param props.className - extra class for layout placement.
 * @returns the wordmark svg (aria-hidden decorative brand art).
 */
export function CmiAiHubWordmark({ size = 24, className }: IconProps) {
  const width = (size * 156) / 24
  return (
    <svg
      width={width}
      height={size}
      className={className}
      viewBox="0 0 156 24"
      fill="none"
      aria-hidden="true"
    >
      <text
        x="0"
        y="17"
        fontFamily="MiSans, 'PingFang SC', 'Microsoft YaHei', sans-serif"
        fontWeight="700"
        fontSize="15"
        fill="currentColor"
      >
        CMI AI Hub
      </text>
    </svg>
  )
}

import type { IconProps } from './icons/props.ts'

/**
 * CMI AI Hub 定制版图形标记（AIHub 定制版）。
 *
 * 替换官方 DeepSeek 鲸鱼 logo：圆角方形底 + 中心「AI」字标，
 * 使用中国移动蓝（#003C8F）与强调蓝（#0085D0）的商务配色。
 */

/** CMI AI Hub 主色（中国移动蓝）。 */
export const CMI_BLUE = '#003C8F'
/** CMI AI Hub 强调色。 */
export const CMI_ACCENT = '#0085D0'

/**
 * Render the CMI AI Hub mark.
 * @param props.size - width in px (default 24; square aspect).
 * @param props.className - extra class for layout placement.
 * @returns the mark svg (aria-hidden decorative brand art).
 */
export function CmiAiHubMark({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="44" height="44" rx="10" fill={CMI_BLUE} />
      <path d="M2 38 L2 48 L12 48 Z" fill={CMI_ACCENT} opacity="0.9" />
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontFamily="MiSans, 'PingFang SC', 'Microsoft YaHei', sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="#FFFFFF"
      >
        AI
      </text>
    </svg>
  )
}

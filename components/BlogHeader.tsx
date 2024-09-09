import Link from 'next/link'
import { PortableText } from 'next-sanity'

import styles from './BlogHeader.module.css'

/**
 * @function BlogHeader
 *
 * @description
 * A component that renders a h1 or h2 with a title and an optional description.
 * The level prop determines whether it renders an h1 or an h2.
 *
 * @param {Object} props
 * @prop {string} title The title to render.
 * @prop {any[]} [description] The description to render.
 * @prop {number} level The level of the header, either 1 or 2.
 *
 * @returns {React.ReactElement} The rendered header.
 *
 * @example
 * <BlogHeader
 *   title="My Blog"
 *   description="This is my personal blog where I share my thoughts about programming and other things."
 *   level={1}
 * />
 */
export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <header className="mb-10 mt-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between text-pretty">
          <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
            {title}
          </h1>
          <h4
            className={`mt-5 text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
          >
            <PortableText value={description} />
          </h4>
        </header>
      )

    case 2:
      return (
        <header>
          <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter text-pretty">
            <Link href="/" className="hover:underline">
              {title}
            </Link>
          </h2>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      )
  }
}

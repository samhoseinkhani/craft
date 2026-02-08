/**
 * Console Easter Egg
 * Fun message for developers who inspect the site
 */

export function initConsoleMessage() {
  // Don't run in development to avoid noise
  // if (import.meta.env.DEV) return

  const styles = {
    title: 'color: #0ea5e9; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 0px #0c4a6e;',
    subtitle: 'color: #64748b; font-size: 14px; font-weight: normal;',
    message: 'color: #334155; font-size: 13px; line-height: 1.6;',
    link: 'color: #0ea5e9; font-size: 13px; font-weight: bold;',
    accent: 'color: #0ea5e9; font-weight: bold;',
  }

  console.log(
    `%c
   _____ __  ___
  / ___//  |/  /
  \\__ \\/ /|_/ /
 ___/ / /  / /
/____/_/  /_/
`,
    styles.title
  )

  console.log('%c👋 Hey there, fellow developer!', styles.subtitle)

  console.log(
    "%c\nI see you're checking out the code. Nice! 🔍\n\n" +
      'This portfolio is built with:\n' +
      '  • React 19 + TypeScript\n' +
      '  • Vite + TanStack Router\n' +
      '  • Tailwind CSS + Motion One\n' +
      '  • Zustand for state management\n\n' +
      "Like what you see? Let's build something together! 🚀",
    styles.message
  )

  console.log('%c\n📧 hsamhoseinkhani@gmail.com', styles.link)
  console.log('%c🔗 github.com/samhoseinkhani\n', styles.link)

  console.log(
    '%cPsst... try the %cKonami Code%c for a surprise 😉',
    styles.message,
    styles.accent,
    styles.message
  )
}

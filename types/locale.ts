/** Local code list */
export const LocaleCodeList = ['en', 'ko'] as const

/** LocaleCodeList to LocaleCodes type */
export type LocaleCode = typeof LocaleCodeList[number]

/** @const {LocaleCodes} Default Locale code */
export const DefaultLocale: LocaleCode = 'en'

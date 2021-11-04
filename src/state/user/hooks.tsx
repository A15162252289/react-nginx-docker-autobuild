import { shallowEqual } from 'react-redux'
import {useAppDispatch, useAppSelector } from 'state/hooks'
import { SupportedLocale } from 'constants/locales'
import {updateUserLocale} from 'state/user/userSlice'
import { useCallback } from 'react'
export function useIsDarkMode(): boolean {
  const { userDarkMode, matchesDarkMode } = useAppSelector(
    ({ user: { matchesDarkMode, userDarkMode } }) => ({
      userDarkMode,
      matchesDarkMode,
    }),
    shallowEqual
  )

  return userDarkMode === null ? matchesDarkMode : userDarkMode
}
export function useUserLocale(): SupportedLocale | null {
  return useAppSelector((state) => state.user.userLocale)
}
export function useUserLocaleManager(): [SupportedLocale | null, (newLocale: SupportedLocale) => void] {
  const dispatch = useAppDispatch()
  const locale = useUserLocale()

  const setLocale = useCallback(
    (newLocale: SupportedLocale) => {
      dispatch(updateUserLocale({ userLocale: newLocale }))
    },
    [dispatch]
  )

  return [locale, setLocale]
}
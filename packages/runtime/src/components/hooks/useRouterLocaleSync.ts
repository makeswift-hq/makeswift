import { useRouter } from 'next/router'

import { useEffect } from 'react'
import { setLocale } from '../../state/actions'
import { useDispatch } from '../../runtimes/react/hooks/use-dispatch'

export const useRouterLocaleSync = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!router.locale) return

    dispatch(setLocale(new Intl.Locale(router.locale)))
  }, [router.locale])
}

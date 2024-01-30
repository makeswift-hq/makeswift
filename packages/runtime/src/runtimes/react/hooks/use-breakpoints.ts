import { Breakpoints } from '../../../state/modules/breakpoints'
import { getBreakpoints } from '../../../state/react-page'
import { useSelector } from './use-selector'

export function useBreakpoints(): Breakpoints {
  return useSelector(state => getBreakpoints(state))
}

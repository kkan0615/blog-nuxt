import RelativeTime from 'dayjs/plugin/relativeTime'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import dayjs from 'dayjs'

dayjs.extend(RelativeTime)
dayjs.extend(LocalizedFormat)
dayjs.extend(isSameOrAfter)

export default dayjs

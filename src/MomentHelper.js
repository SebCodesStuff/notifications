import moment from 'moment'

class MomentHelper {
  constructor () {
    moment.locale('en', {
      relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: '%ds',
        ss: '%ds',
        m: '%dm',
        mm: '%dm',
        h: '%dh',
        hh: '%dh',
        d: '%dd',
        dd: '%dd',
        M: '%d month',
        MM: '%d months',
        y: '%dY',
        yy: '%dY'
      }
    })
  }

  timeFromNow (previousDate) {
    return moment(previousDate).fromNow(true)
  }
}

export default new MomentHelper()

import { UtilsService } from '~/services/utils/utils.service'

const utils = (_, inject) => {
  inject('utils', new UtilsService())
}

export default utils

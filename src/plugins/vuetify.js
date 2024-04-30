import { createVuetify } from 'vuetify'
import { ru } from 'vuetify/locale'

import 'vuetify/styles'

const vuetify = createVuetify({
    locale: {
        locale: 'ru',
        fallback: 'ru',
        messages: { ru },
    },
    theme: {
        themes: {
            light: {
                dark: false,
            },
        },
    },
})

export default vuetify
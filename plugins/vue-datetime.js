import Vue from 'vue'
import { Datetime } from 'vue-datetime'
import { Settings } from 'luxon'

// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css'

Settings.defaultLocale = 'ko'

Vue.component('datetime', Datetime)

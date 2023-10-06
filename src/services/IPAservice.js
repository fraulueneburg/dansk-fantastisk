import axios from 'axios'
import { API_URL } from '../config'

const IPAservice = {
	getAllIPA: () => {
		return axios.get(`${API_URL}/ipa`)
	},
	addIPA: (ipaData) => {
		console.log('FE ADD IPA, DATA:', ipaData)
		return axios.post(`${API_URL}/ipa/add`, ipaData)
	},
}

export default IPAservice

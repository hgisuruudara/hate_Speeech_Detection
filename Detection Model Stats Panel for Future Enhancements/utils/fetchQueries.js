import axios from 'axios'

export const fetchDataSet = async (setter, pageNo = 1, pageSize = 100) => {
  try {
    const BASEURL = process.env.BASEURL + '/dataset'
    const res = await axios.get(BASEURL, { params: { pageNo, pageSize } })
    const data = res.data.data
    setter(data)
  } catch (error) {
    setter([])
  }
} // this is the req we making to fetch the data, dir req for db to fetch data, fetch query

export const fetchStats = async setter => {
  try {
    const BASEURL = process.env.BASEURL + '/stats'
    const res = await axios.get(BASEURL)
    const { toxic, severe_toxic, insult, threat, obscene, identity_hate, totalDocs } = res.data.data[0]
    setter({ toxic, severe_toxic, insult, threat, obscene, identity_hate, total: totalDocs })
  } catch (error) {
    setter([])
  }
}

import { useLanguage } from '../../contexts/language'
import { hackathonsHistory } from '../../portfolio'
import './hackathons.css'
import LinkIcon from '@mui/icons-material/Link'

const hackathons = () => {
  const { language, strings } = useLanguage()

  return (
    <div className='hackathons-page'>
      <div className='hackathons-page__container'>
        <section className='hackathons-header'>
          <div className='hackathons-header__content'>
            <h1>{strings.hackathonsTitle}</h1>
          </div>
        </section>

        <section className='hackathons-table'>
          <div className='hackathons-table-wrapper'>
            <table className='hackathons-table'>
              <thead>
                <tr>
                  <th>{strings.hackathonTitle}</th>
                  <th>{strings.hackathonOrganizer}</th>
                  <th>{strings.hackathonJudges}</th>
                  <th>{strings.hackathonYear}</th>
                  <th>{strings.hackathonTeckStack}</th>
                  <th>{strings.hackathonStatus}</th>
                  <th>{strings.link}</th>
                </tr>
              </thead>
              <tbody>
                {hackathonsHistory.map((hackathon, idx) => (
                  <tr key={idx}>
                    <td>{hackathon.title}</td>
                    <td>{hackathon.organizer}</td>
                    <td>{hackathon.judges}</td>
                    <td>{hackathon.year}</td>
                    <td>{hackathon.teckstack[language]}</td>
                    <td>{hackathon.status[language]}</td>
                    <td className="link-column">
                      {hackathon.link && (
                        <a 
                          href={hackathon.link} 
                          target='_blank' 
                          rel='noopener noreferrer'
                          className="hackathon-link-icon"
                          title={`View hackathon: ${hackathon.title}`}
                        >
                          <LinkIcon fontSize="small" />
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

export default hackathons
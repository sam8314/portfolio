import { useLanguage } from '../../contexts/language'
import { educationHistory, standaloneCourses } from '../../portfolio'
import './Education.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const Education = () => {
  const { language, strings } = useLanguage()

  return (
    <div className='education-page'>



      <section className='education-header'>
        <div className='education-header__content'>

          <h1>{strings.educationTitle}</h1>
        </div>
      </section>

      <section className='education-timeline'>
        {educationHistory.map((item, index) => (
          <article key={item.id} className='education-step'>
            <div className='education-step__marker'>
              <span>{index + 1}</span>
            </div>
            <div className='education-step__details'>
              <div className='education-step__header'>
                <div>
                  <h2>{item.school[language]}</h2>
                  <p className='education-degree'>{item.degree[language]}</p>
                </div>
                <div className='education-period'>{item.period}</div>
              </div>

              {item.activities && (
                <div className='education-notes'>
                  <strong>{strings.educationActivitiesLabel}:</strong>
                  <p>{item.activities[language]}</p>
                </div>
              )}

              {item.firstYearCourses?.[language]?.length > 0 && (
                <div className='education-list-block'>
                  <strong>{strings.educationFirstYearLabel}:</strong>
                  <ul>
                    {item.firstYearCourses[language].map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.skills?.[language]?.length > 0 && (
                <div className='education-list-block'>
                  <strong>{strings.educationSkillsLabel}:</strong>
                  <div className='education-skills'>
                    {item.skills[language].map((skill, idx) => (
                      <span key={idx} className='education-skill'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {item.courses && item.courses.length > 0 && (
                <div className='education-courses-block'>
                  <strong>{strings.educationAllCoursesLabel}:</strong>
                  <div className='education-table-wrapper'>
                    <table className='education-courses-table'>
                      <thead>
                        <tr>
                          <th>{strings.courseName}</th>
                          <th>{strings.courseTopics}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.courses.map((course, idx) => (
                          <tr key={idx}>
                            <td>{course.name}</td>
                            <td>{course.topics}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className='education-courses'>
        <h2>{strings.educationCoursesTitle}</h2>
        <div className='education-table-wrapper'>
          <table className='education-table'>
            <thead>
              <tr>
                <th>{strings.educationCoursesTitle}</th>
                <th>{strings.courseProvider}</th>
                <th>{strings.courseYear}</th>
                <th>{strings.courseNotes}</th>
              </tr>
            </thead>
            <tbody>
              {standaloneCourses.map((course, idx) => (
                <tr key={idx}>
                  <td>
                    {course.link ? (
                      <a href={course.link} target='_blank' rel='noopener noreferrer'>
                        {course.title[language]}
                      </a>
                    ) : (
                      course.title[language]
                    )}
                  </td>
                  <td>{course.provider}</td>
                  <td>{course.year}</td>
                  <td>{course.notes[language]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default Education

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Project = ({ project }) => {
  const [loading, setLoading] = useState(true); // State variable to manage loading state

  useEffect(() => {
    // Set loading to false once project data is available
    if (project) {
      setLoading(false);
    }
  }, [project]); // Trigger effect when project data changes

  return (
    <>
      {loading ? ( // Show loading facade if loading is true
        <div className='facade'></div>
      ) : (
        // Render project cards if loading is false
        <ul className="project-cards">
          {project.flatMap((el, i) => (
            <li key={i}>
              <div className="card-inner">
                <Link href={`/${el.project_link}`} className="text-link">
                  <Image src={`https://jtcporject.s3.ap-southeast-2.amazonaws.com/${el.image}`} width={400} height={400} className="thumb" />
                </Link>
                <div className="info">
                  <div className="tech-info">
                    {el.project_technologie && el.project_technologie.map((ab) => (
                      <span key={ab.id}>{ab.technology}</span>
                    ))}
                  </div>
                  <Link href={`/${el.project_link}`} className="text-link">
                    <h3 className="heading">{el.name}</h3>
                  </Link>
                  <p className="cardpara">{el.project_description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Project;

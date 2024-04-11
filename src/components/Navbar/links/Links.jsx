import Link from 'next/link'

import styles from './links.modules.css'
const Links =()=>{

    const links =[

        {
            title:"Home",
            path:"/",
        },
        {
            title:"About",
            path:"/about",
        },
        {
            title:"Books",
            path:"/books",
        },
        {
            title:"Blog",
            path:"/blog",
        },
    ];
    return(
        <div className={styles.links}>
             {links.map((link) => (
        <Link href={link.path} key={link.title}>
          {link.title}
        </Link>
      ))}
        </div>
    )
}

export default Links
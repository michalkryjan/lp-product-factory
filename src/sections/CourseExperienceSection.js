import React from 'react';
import HeadingWithBg from '@/components/HeadingWithBg';
import StackedTextSwitch from '@/components/StackedTextSwitch';
import styles from '@/styles/sections/CourseExperienceSection.module.scss';

const CourseExperienceSection = () => {
    const paragraphsTab1 = [
        `Cum, quo, sit? Distinctio eligendi illum perferendis repellendus temporibus? Alias 
                    asperiores cumque dolores doloribus ea eum ex, illo in inventore iste iure minima molestias natus 
                    omnis placeat reiciendis similique sunt ullam veniam?`,
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi blanditiis error eveniet 
        fugiat inventore iusto molestias numquam odit officiis, perferendis, possimus qui sequi sit temporibus 
        velit voluptatibus?`
    ];
    const paragraphsTab2 = [
        `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi blanditiis error eveniet fugiat 
                    inventore iusto molestias numquam odit officiis, perferendis, possimus qui sequi sit temporibus 
                    velit voluptatibus?`,
        `Cum, quo, sit? Distinctio eligendi illum perferendis repellendus temporibus? Alias 
                    asperiores cumque dolores doloribus ea eum ex, illo in inventore iste iure minima molestias natus 
                    omnis placeat reiciendis similique sunt ullam veniam?`
    ];
    const paragraphsTab3 = [
        `This course has been attempted by zero people who are eager to learn product design, 
                    especially user experience and user interface, so it is not a prerequisite, but due to the limited 
                    capacity of the priority course with early enrolled people, others can participate in future 
                    courses.`,
        `Obviously, the ability to use tools like Adobe Photoshop and Adobe Illustrator as 
                    well as Microsoft Word, Excel tools, and of course a lot of enthusiasm and energy,`
    ];
    return (
        <section className={styles.courseExperience} id={'courseExperience'}>
            <HeadingWithBg
                as={'h2'}
                text={`Course Experience`}
                bgSrc={'/assets/heading-backgrounds/Experience.svg'}
                bgWidth={612}
                bgHeight={159}
                bgAlt={'Experience'}
            />
            <StackedTextSwitch
                ariaLabel={'Course Experience description based on selected level.'}
                menuOptions={[
                    'After attending the course',
                    'During the period',
                    'Before attending the course'
                ]}
                contentLists={[paragraphsTab1, paragraphsTab2, paragraphsTab3]}
                initialActiveLayerId={2}
                decorationImgSrc={'/assets/course-experience-decoration.svg'}
                imgWidth={326}
                imgHeight={281}
                imgAlt={'Product Factory badge'}
            />
        </section>
    );
};

export default CourseExperienceSection;

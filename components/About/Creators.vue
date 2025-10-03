<template>
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-4xl sm:text-5xl font-semibold text-center text-gray-900 mb-12"
      >
        {{ $t("founders") }}
      </h2>
      <div class="flex flex-wrap justify-center">
        <div
          v-for="(founder, index) in founders[locale]"
          :key="index"
          class="w-full md:w-1/3 p-4"
          data-aos="zoom-in-up"
          data-aos-duration="300"
        >
          <div class="bg-white overflow-hidden">
            <img
              :src="founder.image"
              alt="Founder Image"
              class="w-full h-full object-cover rounded-lg"
            />
            <div class="p-6">
              <div class="flex items-center space-x-2 mb-4">
                <span
                  class="bg-gray-100 rounded-md px-3 py-1 text-sm font-medium text-gray-900 flex items-center space-x-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>

                  <span>{{ founder.name }}</span>
                </span>
              </div>
              <div class="flex items-center space-x-2 mb-4">
                <span
                  class="bg-gray-100 rounded-md px-3 py-1 text-sm font-medium text-gray-500 flex items-center space-x-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                    />
                  </svg>

                  <span>{{ founder.title }}</span>
                </span>
              </div>
              <p class="text-gray-700 text-sm sm:text-base">
                {{ founder.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { locale } = useI18n();
</script>

<script>
export default {
  data() {
    return {
      founders: {
        en: [
          {
            name: "Younes Aithamou",
            title: "Founder",
            description:
              "At just 19 years old, Younes Aithamou is not only a content creator but also the visionary founder of Fluently, an e-learning language platform aimed at revolutionizing the language education industry. Passionate about making learning more accessible and enjoyable, Younes is dedicated to enhancing the language learning experience through innovative technology and engaging content.",
            image:
              "https://i.ibb.co/zNVGgwH/16-B2-A239-B91-C-40-FA-A29-B-69632-D67-F17-A.jpg",
          },
          {
            name: "Kaouther Boudjema",
            title: "English Instructor",
            description:
              "Kaouther Boudjema is a dedicated and experienced English instructor with a passion for helping students achieve their language learning goals and enhance their English skills. With a strong background in teaching and a deep understanding of language acquisition, Kaouther employs innovative and engaging methods to create an effective learning environment for our students.",
            image: "https://i.ibb.co/WphtyFn/IMG-1906-1-1-2-1-1-1-1-1-2-1.jpg",
          },
          {
            name: "Neserine Athamnia ",
            title: "German Instructor",
            description:
              "Neserine Athamnia is a dedicated and experienced German teacher who is committed to helping students achieve their language learning goals and enhance their German skills. With a robust background in teaching and a deep understanding of language acquisition, Neserine uses innovative and engaging methods to create an effective and dynamic learning environment for her students.",
            image: "https://i.ibb.co/Jm22cq9/highest-quality-1-1-1-1-1-1-1.png",
          },
          {
            name: "Labed Nada",
            title: "French Instructor",
            description:
              "Labed Nada is a passionate and seasoned French teacher dedicated to guiding students towards their language learning objectives and improving their French proficiency. With extensive teaching experience and a profound grasp of language acquisition, she employs innovative and engaging techniques to foster a productive and lively learning atmosphere for her students.",
            image: "https://i.ibb.co/fXFczgQ/French.jpg",
          },
          {
            name: "Sayad Walid",
            title: "Spanish Instructor",
            description:
              "Sayad Walid is a passionate and experienced Spanish teacher dedicated to helping students achieve their learning goals and improve their proficiency in the language. With extensive teaching experience and a deep understanding of language acquisition, he employs creative and engaging methods to create a dynamic and effective learning environment for his students.",
            image: "https://i.ibb.co/2n9Y7ry/Photo-spanish.jpg",
          },
          {
            name: "Badis Amroune",
            title: "English Instructor",
            description:
              "Badis Amroune is a skilled and devoted English teacher who excels in helping students reach their language learning aspirations and improve their English abilities. With a wealth of teaching experience and a thorough knowledge of language development, Badis uses innovative and dynamic approaches to create an optimal learning environment for our students.",
            image: "https://i.ibb.co/Lr3dsYj/Badis-photo.jpg",
          },
          {
            name: "Asma Daas",
            title: "Chinese Instructor",
            description:
              "Asma Daas is a committed and skilled Chinese teacher, well-known for empowering students to achieve their language learning objectives and strengthen their Chinese language skills. With a broad teaching background and profound understanding of language acquisition, Asma utilizes innovative and interactive techniques to establish an ideal educational setting for our learners.",
            image: "https://i.ibb.co/6FXDCYS/Chinese-picture-about.jpg",
          },
          {
            name: "Amri Asma",
            title: "Italian Instructor",
            description:
              "Asma Amri is a dedicated and talented Italian teacher, known for guiding students to reach their language mastery goals and enhancing their Italian proficiency. With rich teaching experience and a deep understanding of language learning processes, Asma applies creative and engaging strategies to create an effective learning environment for our students.",
            image: "https://i.ibb.co/7QLTnfK/dslmkjfmlsqjdkflkjsdf.jpg",
          },
          {
            name: "Lamia Boutrouf",
            title: "Korean Instructor",
            description:
              "Lamia Boutrouf is a dedicated and experienced English instructor with a passion for helping students achieve their language learning goals and enhance their English skills. With a strong background in teaching and a deep understanding of language acquisition, Kaouther employs innovative and engaging methods to create an effective learning environment for our students.",
            image: "https://i.ibb.co/ChqSmZN/korean-pic.jpg",
          },
        ],
        fr: [
          {
            name: "Younes Aithamou",
            title: "Fondateur",
            description:
              "À seulement 19 ans, Younes Aithamou n'est pas seulement un créateur de contenu, mais aussi le fondateur visionnaire de Fluently, une plateforme d'apprentissage des langues en ligne visant à révolutionner l'industrie de l'éducation linguistique. Passionné par rendre l'apprentissage plus accessible et agréable, Younes s'engage à améliorer l'expérience d'apprentissage des langues grâce à une technologie innovante et un contenu captivant",
            image:
              "https://i.ibb.co/zNVGgwH/16-B2-A239-B91-C-40-FA-A29-B-69632-D67-F17-A.jpg",
          },
          {
            name: "Kaouther Boudjema ",
            title: "Enseignante D'Anglais",
            description:
              "Kaouther Boudjema est une enseignante d'anglais dévouée et expérimentée, passionnée par l'aide aux étudiants pour atteindre leurs objectifs d'apprentissage linguistique et améliorer leurs compétences en anglais. Avec une solide expérience en enseignement et une compréhension approfondie de l'acquisition des langues, Kaouther utilise des méthodes innovantes et engageantes pour créer un environnement d'apprentissage efficace pour nos étudiants.",
            image: "https://i.ibb.co/WphtyFn/IMG-1906-1-1-2-1-1-1-1-1-2-1.jpg",
          },
          {
            name: "Neserine Athamnia ",
            title: "Enseignante D'Allemand",
            description:
              "Neserine Athamnia est une enseignante de allemand dévouée et expérimentée, passionnée par l'accompagnement des étudiants dans l'atteinte de leurs objectifs d'apprentissage linguistique et l'amélioration de leurs compétences en allemand. Avec une solide expérience en enseignement et une compréhension approfondie de l'acquisition des langues, ",
            image: "https://i.ibb.co/Jm22cq9/highest-quality-1-1-1-1-1-1-1.png",
          },
          {
            name: "Labed Nada ",
            title: "Enseignante De Français",
            description:
              "Labed Nada est une enseignante de langue française passionnée et expérimentée, dévouée à aider les étudiants à atteindre leurs objectifs d'apprentissage linguistique et à améliorer leurs compétences en français. Forte d'une expérience pédagogique approfondie et d'une compréhension approfondie de l'acquisition des langues, elle utilise des méthodes innovantes et engageantes pour créer un environnement d'apprentissage efficace et dynamique pour ses étudiants.",
            image: "https://i.ibb.co/fXFczgQ/French.jpg",
          },
          {
            name: "Sayad Walid",
            title: "Enseignant D'Espagnol",
            description:
              "Sayad Walid est un enseignant passionné et expérimenté d'espagnol, dédié à aider les étudiants à atteindre leurs objectifs d'apprentissage et à améliorer leur maîtrise de la langue. Avec une vaste expérience en enseignement et une compréhension approfondie de l'acquisition des langues, il utilise des méthodes créatives et engageantes pour créer un environnement d'apprentissage dynamique et efficace pour ses élèves.",
            image: "https://i.ibb.co/2n9Y7ry/Photo-spanish.jpg",
          },
          {
            name: "Badis Amroune",
            title: "Enseignant D'Anglais",
            description:
              "Badis Amroune est une enseignant d'anglais compétente et dévouée, qui excelle à aider les élèves à atteindre leurs objectifs d'apprentissage linguistique et à améliorer leurs compétences en anglais. Avec une riche expérience en enseignement et une connaissance approfondie du développement linguistique, Kaouther utilise des approches innovantes et dynamiques pour créer un environnement d'apprentissage optimal pour nos élèves.",
            image: "https://i.ibb.co/Lr3dsYj/Badis-photo.jpg",
          },
          {
            name: "Asma Daas",
            title: "Enseignante De Chinois",
            description:
              "Asma Daas est une enseignante de chinois engagée et compétente, bien connue pour aider les étudiants à atteindre leurs objectifs d'apprentissage linguistique et à renforcer leurs compétences en chinois. Avec une large expérience dans l'enseignement et une compréhension approfondie de l'acquisition du langage, Asma utilise des techniques innovantes et interactives pour créer un environnement éducatif idéal pour nos apprenants.",
            image: "https://i.ibb.co/6FXDCYS/Chinese-picture-about.jpg",
          },
          {
            name: "Asma Amri",
            title: "Enseignante D'Italien",
            description:
              " Asma Amri est une enseignante d'italien dévouée et talentueuse, reconnue pour guider les étudiants vers la maîtrise de la langue et améliorer leurs compétences en italien. Avec une riche expérience dans l'enseignement et une compréhension profonde des processus d'apprentissage des langues, Asma utilise des stratégies créatives et engageantes pour créer un environnement d'apprentissage efficace pour nos étudiants.",
            image: "https://i.ibb.co/7QLTnfK/dslmkjfmlsqjdkflkjsdf.jpg",
          },
          {
            name: "Lamia Boutrouf ",
            title: "Enseignante De Coréen",
            description:
              "Lamia Boutrouf est une enseignante de Coréen dévouée et talentueuse, reconnue pour guider les étudiants vers la maîtrise de la langue et améliorer leurs compétences en italien. Avec une riche expérience dans l'enseignement et une compréhension profonde des processus d'apprentissage des langues, Asma utilise des stratégies créatives et engageantes pour créer un environnement d'apprentissage efficace pour nos étudiants.",
            image: "https://i.ibb.co/ChqSmZN/korean-pic.jpg",
          },
        ],
        ar: [
          {
            name: "Younes Aithamou",
            title: "مؤسس و مدير",
            description:
              "في سن 19 عامًا فقط، يونس أيت حمو ليس فقط مبدع محتوى بل أيضًا مؤسس رؤيوي لمنصة Fluently، وهي منصة تعليمية إلكترونية للغات تهدف إلى ثورة في صناعة تعليم اللغات. متحمسًا لجعل التعلم أكثر إمكانية ومتعة، يونس مكرس لتحسين تجربة تعلم اللغات من خلال التكنولوجيا الابتكارية والمحتوى الملهم",
            image:
              "https://i.ibb.co/zNVGgwH/16-B2-A239-B91-C-40-FA-A29-B-69632-D67-F17-A.jpg",
          },
          {
            name: "Kaouther Boudjema",
            title: "مُدرِّسة لغة إنجليزية",
            description:
              "كوثر بوجمعة هي مُدرِّسة لغة إنجليزية مخلصة وذات خبرة، شغوفة بمساعدة الطلاب على تحقيق أهدافهم في تعلم اللغة وتعزيز مهاراتهم في اللغة الإنجليزية. مع خلفية قوية في التدريس وفهم عميق لاكتساب اللغة، تستخدم كوثر طرقًا مبتكرة وجذابة لخلق بيئة تعليمية فعّالة لطلابنا.",
            image: "https://i.ibb.co/WphtyFn/IMG-1906-1-1-2-1-1-1-1-1-2-1.jpg",
          },
          {
            name: "Neserine Athamnia",
            title: " مُدَرِّسة لغة ألمانية",
            description:
              "سيرين أثامنية هي معلمة ألمانية مخلصة وذات خبرة، شغوفة بمساعدة الطلاب في تحقيق أهدافهم في تعلم اللغة وتحسين مهاراتهم في الألمانية. تتمتع بخبرة قوية في التدريس وفهم عميق لاكتساب اللغات.",
            image: "https://i.ibb.co/Jm22cq9/highest-quality-1-1-1-1-1-1-1.png",
          },
          {
            name: "Labed Nada ",
            title: " أستاذة لغة فرنسية",
            description:
              "لابد ندى هي معلمة لغة فرنسية متحمسة وذات خبرة، ملتزمة بمساعدة الطلاب على تحقيق أهدافهم في تعلم اللغة وتحسين مهاراتهم في اللغة الفرنسية. بفضل خبرتها الواسعة في التدريس وفهمها العميق لاكتساب اللغة، تستخدم  أساليب مبتكرة وجذابة لخلق بيئة تعلم فعالة وديناميكية لطلابها",
            image: "https://i.ibb.co/fXFczgQ/French.jpg",
          },
          {
            name: "Sayad Walid",
            title: "أستاذ لغة إسبانية",
            description:
              "سيد وليد هو معلم شغوف وذو خبرة في تعليم الفرنسية، ويكرس نفسه لمساعدة الطلاب في تحقيق أهدافهم التعليمية وتعزيز مهاراتهم في اللغة. بفضل خبرته الواسعة في التدريس وفهمه العميق لاكتساب اللغات، يستخدم طرقًا إبداعية وجذابة لخلق بيئة تعليمية ديناميكية وفعالة لطلابه.",
            image: "https://i.ibb.co/2n9Y7ry/Photo-spanish.jpg",
          },
          {
            name: " Badis Amroune",
            title: "English Instructor",
            description:
              "كوثر بوجما هي معلمة إنجليزية ماهرة ومتفانية، تتميز في مساعدة الطلاب على تحقيق أهدافهم في تعلم اللغة وتحسين مهاراتهم في الإنجليزية. بفضل خبرتها الواسعة في التدريس ومعرفتها العميقة بتطوير اللغة، تستخدم كوثر طرقاً مبتكرة وديناميكية لخلق بيئة تعليمية مثالية لطلابنا.",
            image: "https://i.ibb.co/Lr3dsYj/Badis-photo.jpg",
          },
          {
            name: "Asma Daas",
            title: " مدرس اللغة الصينية ",
            description:
              "أسما داس معلمة صينية ملتزمة وبارعة، معروفة بتمكين الطلاب من تحقيق أهدافهم في تعلم اللغة وتعزيز مهاراتهم في اللغة الصينية. بفضل خبرتها الواسعة في التدريس وفهمها العميق لاكتساب اللغة، تستخدم أسما تقنيات مبتكرة وتفاعلية لتوفير بيئة تعليمية مثالية لطلابنا.",
            image: "https://i.ibb.co/6FXDCYS/Chinese-picture-about.jpg",
          },
          {
            name: "Asma Amri",
            title: " مدرس اللغة الإيطالية",
            description:
              "أسما عمري معلمة إيطالية متفانية وموهوبة، معروفة بإرشاد الطلاب لتحقيق أهدافهم في إتقان اللغة وتعزيز مهاراتهم في اللغة الإيطالية. بفضل خبرتها الواسعة وفهمها العميق لعمليات تعلم اللغة، تطبق أسما استراتيجيات إبداعية وجذابة لخلق بيئة تعليمية فعّالة لطلابنا.",
            image: "https://i.ibb.co/7QLTnfK/dslmkjfmlsqjdkflkjsdf.jpg",
          },
          {
            name: "",
            title: "Enseignante D'Italien",
            description:
              " Asma Amri est une enseignante d'italien dévouée et talentueuse, reconnue pour guider les étudiants vers la maîtrise de la langue et améliorer leurs compétences en italien. Avec une riche expérience dans l'enseignement et une compréhension profonde des processus d'apprentissage des langues, Asma utilise des stratégies créatives et engageantes pour créer un environnement d'apprentissage efficace pour nos étudiants.",
            image: "https://i.ibb.co/ChqSmZN/korean-pic.jpg",
          },
        ],
      },
    };
  },
};
</script>

<style>
.founder-card {
  background: #ffffff;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.founder-card img {
  width: 100%;
  height: 18rem;
  object-fit: cover;
}

.founder-card .content {
  padding: 1.5rem;
  text-align: center;
}

.founder-card h3 {
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.founder-card p.title {
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.founder-card p.description {
  font-size: 1rem;
  color: #4b5563;
}
</style>

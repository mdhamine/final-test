<template>
  <div
    class="hero min-h-screen background-joinnow flex flex-col items-center justify-center"
    id="SignUp"
  >
    <div class="hero-content text-center max-w-6xl">
      <div
        class="w-full max-w-screen mx-auto border-2 rounded-[50px] border-blue-200 bg-[#202075]/20"
      >
        <form
          class="mx-auto z-50 my-auto py-8 pt-8 mt-8 lg:py-12 px-6 text-start w-[280px] sm:w-[400px] md:w-[540px] lg:w-[940px] xl:w-[1024px]"
          @submit.prevent="signUp"
        >
          <div
            class="flex items-center flex-col space-y-3 space-x-3 rtl:space-x-reverse place-items-center mx-auto mb-6 mt-8"
          >
            <img :src="logo" class="h-14 mx-auto" alt="Logo" />
            <div
              v-if="authError"
              role="alert"
              class="alert bg-[#030425] text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="stroke-info shrink-0 w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>{{ authError }}</span>
            </div>
          </div>
          <div class="mt-8 mb-6">
            <span class="text-2xl font-bold text-white mt-8">{{
              $t("registerdetails")
            }}</span>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="email"
              id="floating_email"
              v-model="email"
              class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-blue-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-blue-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >{{ $t("formemail") }}</label
            >
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              pattern="[0-9]*"
              id="phone"
              v-model="phone"
              class="disable-arrows block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-blue-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer"
              placeholder=" "
              required
            />
            <label
              for="phone"
              class="peer-focus:font-medium absolute text-sm text-blue-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >{{ $t("formnum") }}</label
            >
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                id="name"
                v-model="name"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-blue-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer"
                placeholder=" "
                required
              />
              <label
                for="name"
                class="peer-focus:font-medium absolute text-sm text-blue-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >{{ $t("formfname") }}</label
              >
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                id="lastname"
                v-model="lastname"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-blue-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer"
                placeholder=" "
                required
              />
              <label
                for="lastname"
                class="peer-focus:font-medium absolute text-sm text-blue-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >{{ $t("formlname") }}</label
              >
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-blue-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-300 peer"
                placeholder=" "
                required
                type="number"
                v-model="age"
                max="100"
                name="age"
                id="age"
              />
              <label
                class="peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:font-medium absolute text-sm text-blue-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >{{ $t("formage") }}</label
              >
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <label for="state" class="sr-only">{{ $t("formstate") }}</label>
              <select
                id="state"
                v-model="state"
                required
                class="block py-2.5 px-0 w-full text-sm text-blue-100 bg-[#101b50] rounded-none border-0 border-b-2 border-blue-200 appearance-none focus:outline-none focus:ring-0 focus:border-blue-200 peer"
              >
                <option selected disabled class="text-blue-100" value="default">
                  {{ $t("formchoosecountry") }}
                </option>
                <option value="adrar">{{ $t("1⋅Adrar") }}</option>
                <option value="chlef">{{ $t("2⋅Chlef") }}</option>
                <option value="laghouat">{{ $t("3⋅Laghouat") }}</option>
                <option value="oum_el_bouaghi">
                  {{ $t("4⋅Oum El Bouaghi") }}
                </option>
                <option value="batna">{{ $t("5⋅Batna") }}</option>
                <option value="bejaia">{{ $t("6⋅Béjaïa") }}</option>
                <option value="biskra">{{ $t("7⋅Biskra") }}</option>
                <option value="bechar">{{ $t("8⋅Béchar") }}</option>
                <option value="blida">{{ $t("9⋅Blida") }}</option>
                <option value="bouira">{{ $t("10⋅Bouira") }}</option>
                <option value="tamanrasset">{{ $t("11⋅Tamanrasset") }}</option>
                <option value="tebessa">{{ $t("12⋅Tébessa") }}</option>
                <option value="tlemcen">{{ $t("13⋅Tlemcen") }}</option>
                <option value="tiaret">{{ $t("14⋅Tiaret") }}</option>
                <option value="tizi_ouzou">{{ $t("15⋅Tizi Ouzou") }}</option>
                <option value="algiers">{{ $t("16⋅Algiers") }}</option>
                <option value="djelfa">{{ $t("17⋅Djelfa") }}</option>
                <option value="jijel">{{ $t("18⋅Jijel") }}</option>
                <option value="setif">{{ $t("19⋅Sétif") }}</option>
                <option value="saida">{{ $t("20⋅Saïda") }}</option>
                <option value="skikda">{{ $t("21⋅Skikda") }}</option>
                <option value="sidi_bel_abbes">
                  {{ $t("22⋅Sidi Bel Abbès") }}
                </option>
                <option value="annaba">{{ $t("23⋅Annaba") }}</option>
                <option value="guelma">{{ $t("24⋅Guelma") }}</option>
                <option value="constantine">{{ $t("25⋅Constantine") }}</option>
                <option value="medea">{{ $t("26⋅Médéa") }}</option>
                <option value="mostaganem">{{ $t("27⋅Mostaganem") }}</option>
                <option value="msila">{{ $t("28⋅M'Sila") }}</option>
                <option value="mascara">{{ $t("29⋅Mascara") }}</option>
                <option value="ouargla">{{ $t("30⋅Ouargla") }}</option>
                <option value="oran">{{ $t("31⋅Oran") }}</option>
                <option value="el_bayadh">{{ $t("32⋅El Bayadh") }}</option>
                <option value="illizi">{{ $t("33⋅Illizi") }}</option>
                <option value="bordj_bou_arreridj">
                  {{ $t("34⋅Bordj Bou Arréridj") }}
                </option>
                <option value="boumerdes">{{ $t("35⋅Boumerdès") }}</option>
                <option value="el_tarf">{{ $t("36⋅El Tarf") }}</option>
                <option value="tindouf">{{ $t("37⋅Tindouf") }}</option>
                <option value="tissemsilt">{{ $t("38⋅Tissemsilt") }}</option>
                <option value="el_oued">{{ $t("39⋅El Oued") }}</option>
                <option value="khenchela">{{ $t("40⋅Khenchela") }}</option>
                <option value="souk_ahras">{{ $t("41⋅Souk Ahras") }}</option>
                <option value="tipaza">{{ $t("42⋅Tipaza") }}</option>
                <option value="mila">{{ $t("43⋅Mila") }}</option>
                <option value="ain_defla">{{ $t("44⋅Aïn Defla") }}</option>
                <option value="naama">{{ $t("45⋅Naâma") }}</option>
                <option value="ain_temouchent">
                  {{ $t("46⋅Aïn Témouchent") }}
                </option>
                <option value="ghardaia">{{ $t("47⋅Ghardaïa") }}</option>
                <option value="relizane">{{ $t("48⋅Relizane") }}</option>
                <option value="timimoun">{{ $t("49⋅Timimoun") }}</option>
                <option value="bordj_badji_mokhtar">
                  {{ $t("50⋅Bordj Badji Mokhtar") }}
                </option>
                <option value="ouled_djellal">
                  {{ $t("51⋅Ouled Djellal") }}
                </option>
                <option value="beni_abbees">{{ $t("52⋅Béni Abbès") }}</option>
                <option value="in_salah">{{ $t("53⋅In Salah") }}</option>
                <option value="in_guezzam">{{ $t("54⋅In Guezzam") }}</option>
                <option value="touggourt">{{ $t("55⋅Touggourt") }}</option>
                <option value="djanet">{{ $t("56⋅Djanet") }}</option>
                <option value="el_mghair">{{ $t("57⋅El M'Ghair") }}</option>
                <option value="el_meniaa">{{ $t("58⋅El Meniaa") }}</option>
              </select>
            </div>
          </div>

          <div class="mt-8">
            <span class="text-2xl font-bold text-white mt-8">{{
              $t("paymentdetails")
            }}</span>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6 mt-8 mb-6">
            <div class="relative z-0 w-full mb-5 group">
              <div class="flex items-center mb-4">
                <input
                  id="ccp"
                  type="radio"
                  v-model="selectedpayment"
                  value="ccp"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  for="ccp"
                  class="ml-2 text-sm font-medium text-white flex items-center"
                >
                  CCP
                  <img
                    src="https://i.ibb.co/WtpZLKQ/Screenshot-2024-09-16-at-19-54-51.png"
                    class="h-[23px] w-[40px] mx-14"
                  />
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="ccp"
                  type="radio"
                  v-model="selectedpayment"
                  value="baridi"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  for="ccp"
                  class="ml-2 text-sm font-medium text-white flex items-center"
                >
                  Baridimob
                  <img
                    src="https://i.ibb.co/3SkXXyV/Screenshot-2024-09-16-at-14-20-49.png"
                    class="h-[23px] w-[40px] mx-5"
                  />
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="chargily"
                  type="radio"
                  v-model="selectedpayment"
                  value="chargily"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  for="chargily"
                  class="ml-2 text-sm font-medium text-white flex items-center"
                >
                  Carte CIB
                  <img
                    src="https://i.ibb.co/BTwWW6k/Screenshot-2024-09-16-at-19-57-27.png"
                    class="h-[23px] w-[40px] mx-6"
                  />
                </label>
              </div>
              <div class="flex items-center">
                <input
                  id="ccp"
                  type="radio"
                  v-model="selectedpayment"
                  value="chargily2"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                />
                <label
                  for="ccp"
                  class="ml-2 text-sm font-medium text-white flex items-center"
                >
                  EDAHABIA
                  <img
                    src="https://i.ibb.co/PD8nTGF/Screenshot-2024-09-16-at-14-08-52.png"
                    class="h-[24px] w-[42px] mx-4"
                    alt="Logo"
                  />
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            :disabled="submitLoading"
            class="px-16 py-3 md:px-20 md:py-3 font-medium mx-auto block text-center shine text-white bg-[#000032] border-2 border-[#2893ff] rounded-full text-md mb-6"
          >
            <span v-if="!submitLoading">{{ $t("forsubmit") }}</span>
            <span v-else>Loading...</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.disable-arrows::-webkit-outer-spin-button,
.disable-arrows::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.disable-arrows[type="number"] {
  -moz-appearance: textfield;
}

.background-joinnow {
  background-color: #030324;
  background-image: radial-gradient(
      at 99% 50%,
      rgba(69, 112, 255, 0.2) 0,
      transparent 65%
    ),
    radial-gradient(at 1% 50%, rgba(40, 204, 255, 0.2) 0, transparent 65%);
}
</style>

<script setup>
import { ref } from "vue";
import { useRouter } from "#app";
import { useI18n } from "vue-i18n";
import { logo } from "~/globalVariables.js";
import { useFetch } from "#app";

const { locale } = useI18n();
const router = useRouter();
const localePath = useLocalePath();
const { t } = useI18n();

const chargily = ref(false);
const selectedpayment = ref("");
const submitLoading = ref(false);
const email = ref("");
const phone = ref("");
const password = ref("");
const name = ref("");
const lastname = ref("");
const age = ref("");
const state = ref("default");
const authError = ref("");
const supabase = useSupabaseClient();
const user = useSupabaseUser();

onMounted(() => {
  chargily.value = false;
}),
  watchEffect(async () => {
    if (user.value) {
      await navigateTo(localePath("/course/french-summer/payment"));
    }
  });

const startCheckout = async () => {
  const { data, error } = await useFetch("/api/purchase", {
    method: "POST",
    body: {
      itemId: "01jv720bxx73n0p2cp4v4gkbkc",
      course: "18",
      locale: locale.value,
      userId: user.value.id,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (error.value) {
    console.error("Payment error:", error.value);
  } else {
    window.location.href = data.value.checkoutUrl;
  }
};

const signUp = async () => {
  if (!name.value) return (authError.value = "First name required");
  if (!lastname.value) return (authError.value = "Last name required");
  if (!age.value) return (authError.value = "Age required");
  if (!state.value) return (authError.value = "State required");
  if (!email.value) return (authError.value = "Email required");
  if (!phone.value) return (authError.value = "Phone Number required");
  if (!selectedpayment.value)
    return (authError.value = "Select payment method");

  submitLoading.value = true;

  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: phone.value,
    options: {
      data: {
        first_name: name.value,
        last_name: lastname.value,
        country: state.value,
        age: age.value,
        phone: phone.value,
      },
    },
  });

  if (error) {
    authError.value = error.message;
    submitLoading.value = false;
    return;
  }

  if (data.user) {
    const userId = data.user.id;

    const { error: insertError } = await supabase.from("courses").insert([
      {
        userid: userId,
        email: email.value,
        phone: phone.value,
        first_name: name.value,
        last_name: lastname.value,
        age: age.value,
        country: state.value,
        courses: [],
      },
    ]);

    if (insertError) {
      console.error("Error inserting into user_courses:", insertError.message);
    } else {
      console.log(selectedpayment.value);
      if (
        selectedpayment.value === "chargily2" ||
        selectedpayment.value === "chargily"
      ) {
        await startCheckout();
      }
      if (selectedpayment.value != "chargily") {
        router.push(localePath("/course/french-spe/payment"));
      }
    }
  }

  submitLoading.value = false;
};

const clearError = () => {
  authError.value = "";
};
</script>

import React from "react";
import "../App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CleanHand from "../img/wash-hand.svg";
import Distance from "../img/distance.svg";
import Doctor from "../img/doctor.svg";
import Home from "../img/home.svg";
import Call from "../img/call.svg";
import Workout from "../img/workout.svg";
import Food from "../img/food.svg";

function Symptom() {
  return (
    <div style={{ margin: "20px" }}>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Gejala</Tab>
          <Tab>Pencegahan</Tab>
          <Tab>Pengobatan</Tab>
        </TabList>

        <TabPanel>
          <p>
            Penyakit Coronavirus (COVID-19) adalah penyakit menular yang disebabkan oleh virus korona yang baru ditemukan.
          </p>
          <p>
            Kebanyakan orang yang jatuh sakit dengan COVID-19 akan mengalami gejala ringan hingga
            gejala sedang dan sembuh tanpa perawatan khusus.
          </p>
          <hr />
          <p>BAGAIMANA VIRUS INI MENYEBAR ?!</p>
          <p>
            Virus yang menyebabkan COVID-19 terutama ditularkan melalui tetesan yang dihasilkan ketika orang yang terinfeksi batuk, bersin, 
            atau menghembuskan napas. Tetesan ini terlalu berat untuk digantung di udara, 
            dan dengan cepat jatuh ke lantai atau permukaan.
          </p>
          <p>
            Anda dapat terinfeksi dengan menghirup virus jika Anda berada dalam jarak dekat dengan seseorang yang mengidap COVID-19, 
            atau dengan menyentuh permukaan yang terkontaminasi 
            dan kemudian mata, hidung, atau mulut Anda.
          </p>
          <p>
            Source:{" "}
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
              target="_blank"
              style={{ color: "blue" }}
            >
              who.int
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            COVID-19 memengaruhi orang yang berbeda dengan cara yang berbeda. 
            Kebanyakan orang yang terinfeksi akan mengembangkan penyakit ringan hingga sedang 
            dan pulih tanpa dirawat di rumah sakit.
          </p>
          <hr />
          <p>Gejala paling umum:</p>
          <ul>
            <li>Demam</li>
            <li>Batuk Kering</li>
            <li>Kelelahan</li>
          </ul>
          <p>Gejala yang kurang umum:</p>
          <ul>
            <li>Sakit dan nyeri</li>
            <li>Sakit tenggorokan</li>
            <li>Diare</li>
            <li>Sakit kepala</li>
            <li>Kehilangan rasa atau bau</li>
            <li>Ruam pada kulit, atau perubahan warna pada jari tangan atau kaki</li>
          </ul>
          <p>Gejala yang paling serius:</p>
          <ul>
            <li>Sesulitan bernapas atau sesak napas</li>
            <li>Nyeri atau tekanan dada</li>
            <li>Kehilangan bicara atau gerakan</li>
          </ul>
          <p>
            Cari pertolongan medis segera jika Anda mengalami gejala serius.
            Selalu hubungi sebelum mengunjungi dokter atau fasilitas kesehatan Anda.
          </p>
          <img src={Doctor} style={{ height: 350 }} />
          <p>
            Orang dengan gejala ringan yang sebenarnya sehat harus mengelola gejalanya di rumah.
          </p>
          <p>
            Rata-rata dibutuhkan waktu 5–6 hari sejak seseorang terinfeksi virus untuk 
            menunjukkan gejala, namun dapat memakan waktu hingga 14 hari.
          </p>
          <p>
            Source:{" "}
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms"
              target="_blank"
              style={{ color: "blue" }}
            >
              who.int
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Lindungi diri Anda dan orang lain di sekitar Anda dengan mengetahui fakta dan mengambil tindakan pencegahan yang tepat. Ikuti saran yang diberikan oleh
badan kesehatan masyarakat.
          </p>
          <hr />
          <p>Langkah untuk mencegah COVID-19:</p>
          <ul>
            <li>
              Bersihkan tangan Anda sesering mungkin. Gunakan sabun dan air, atau antiseptik berbasis alkohol.
              <img src={CleanHand} style={{ height: 450 }} />
            </li>
            <li>
              Jaga jarak aman dari siapa pun yang batuk atau bersin.
              <img src={Distance} style={{ height: 350 }} />
            </li>

            <li>Jangan menyentuh mata, hidung, atau mulut Anda.</li>
            <li>
              Tutupi hidung dan mulut Anda dengan siku yang tertekuk atau tisu saat Anda batuk atau bersin.
            </li>
            <li>Tetap di rumah jika Anda merasa tidak enak badan.</li>
            <li>
              Jika Anda mengalami demam, batuk, dan kesulitan bernapas, dapatkan bantuan medis. Hubungi terlebih dahulu.
            </li>
          </ul>
          <p>
            Source:{" "}
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
              target="_blank"
              style={{ color: "blue" }}
            >
              who.int
            </a>
          </p>
        </TabPanel>
        <TabPanel>
          <p>
            Sampai saat ini, belum ada vaksin atau obat khusus untuk COVID-19. 
            Perawatan sedang diselidiki, dan akan diuji melalui uji klinis.
          </p>
          <hr />
          <p>Self-care</p>
          <p>
            Jika merasa sakit sebaiknya istirahat, minum banyak cairan, dan makan makanan bergizi. 
            Tinggallah di kamar terpisah dari anggota keluarga lainnya, 
            dan gunakan kamar mandi khusus jika memungkinkan.
            Bersihkan dan disinfeksi permukaan yang sering disentuh.
          </p>
          <p>
            Setiap orang harus menjaga gaya hidup sehat di rumah. 
            Menjaga pola makan yang sehat, tidur, tetap aktif, 
            dan melakukan kontak sosial dengan orang tersayang melalui telepon atau internet. 
            Anak-anak membutuhkan kasih sayang dan perhatian ekstra dari orang dewasa selama masa-masa sulit. 
            Jaga rutinitas dan jadwal rutin sebanyak mungkin.
          </p>
          <img src={Home} style={{ height: 150 }} />
          <img src={Call} style={{ height: 250 }} />
          <img src={Workout} style={{ height: 250 }} />
          <img src={Food} style={{ height: 200 }} />
          <p>
            Merasa sedih, stres, atau bingung selama krisis adalah hal yang wajar. 
            Berbicara dengan orang yang Anda percaya, seperti teman dan keluarga, 
            dapat membantu. Jika Anda merasa kewalahan, bicarakan dengan petugas kesehatan atau konselor.
          </p>
          <p>Medical treatments</p>
          <p>
            Jika Anda memiliki gejala ringan dan dalam keadaan sehat, lakukan isolasi sendiri dan hubungi penyedia medis Anda 
            atau saluran informasi COVID-19 untuk mendapatkan nasihat.
          </p>
          <p>
            Cari perawatan medis jika Anda mengalami demam, batuk, dan kesulitan
            bernafas. Hubungi terlebih dahulu.
          </p>
          <p>
            Source:{" "}
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=protect"
              target="_blank"
              style={{ color: "blue" }}
            >
              who.int
            </a>
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Symptom;

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-activity',
  templateUrl: './detail-activity.component.html',
  styleUrls: ['./detail-activity.component.css']
})
export class DetailActivityComponent implements OnInit {

  moc_data = [
    {
      "activity_id": 1,
      "name": "เกียรติสินแบ่งปัน บริจาคคอมพิวเตอร์ให้วิทยาลัยการอาชีพ",
      "detail": "บริษัทเกียรติสินโฮลเซลได้มอบอุปกรณ์ไอทีและคอมพิวเตอร์ ให้กับทางวิทยาลัยการอาชีพบ้านไผ่เพื่อใช้เป็นสื่อการเรียนการสอน และนำไปใช้ให้เกิดประโยชน์ในการศึกษา",
      "image": [
        "assets/images/detail-activity/dt-1/17403.jpg",
        "assets/images/detail-activity/dt-1/17404.jpg",
        "assets/images/detail-activity/dt-1/17405.jpg",
        "assets/images/detail-activity/dt-1/17406.jpg",
      ]
    },
    {
      "activity_id": 2,
      "name": "ทำบุญตักบาตร",
      "detail": "ทางผู้บริหารร่วมกันกับพนักงานจัดกิจกรรม ทำบุญตักบาตร จัดขึ้นที่บริษัทเกียรติสินโฮลเซล ณ ลานหน้าค้าส่ง เพื่อเสริมสร้างความเป็นสิริมงคล ให้แก่คณะผู้บริหารและพนักงานทุกคน",
      "image": [
        "assets/images/detail-activity/dt-2/1.jpg",
        "assets/images/detail-activity/dt-2/2.jpg",
        "assets/images/detail-activity/dt-2/3.jpg",
        "assets/images/detail-activity/dt-2/4.jpg",
      ]
    },
    {
      "activity_id": 3,
      "name": "พาณิชลดราคาช่วยประชาชน กรมการค้าภายใน",
      "detail": "เกียรติสินโฮลเซลได้เข้าร่วมโครงการ พาณิชย์ลดราคาช่วยประชาชน เพื่อช่วยลดค่าครองชีพให้แก่ชาวบ้าน ซึ่งทางกระทรวงพาณิชย์ พณฯ จุรินทร์ ลักษณวิศิษฎ์ รองนายกรัฐมนตรีและรัฐมนตรีว่าการกระทรวงพาณิชย์ พร้อมคณะ ลงพื้นที่ตรวจเยี่ยมประชาชนและโครงการพาณิชย์ลดราคาช่วยประชาชน ณ บริษัท เกียรติสินโฮลเซล จำกัด อ.บ้านไผ่ จ.ขอนแก่น โดยมี ดร.สมศักดิ์ จังตระกูล ผู้ว่าราชการจังหวัดขอนแก่น นายรุจน์ รังสี นายอำเภอบ้านไผ่ พ.ต.อ.ธนาวัชร ดีบุญมี ณ ชุมแพ รอง ผบก.ภ.จว.ขอนแก่นพ.ต.อ.สุวัฒน์ สมจิตต์ ผกก.สภ.บ้านไผ่ อีกทั้งเยี่ยมเยือนร้านค้าบริเวณห้างเกียรติสิน โฮลเซล เพื่อให้กำลังใจให้ผ่านพ้นวิกฤตนี้ไปด้วยกัน ",
      "image": [
        "assets/images/detail-activity/dt-3/1.jpg",
        "assets/images/detail-activity/dt-3/2.jpg",
        "assets/images/detail-activity/dt-3/3.jpg",
        "assets/images/detail-activity/dt-3/4.jpg",
      ]
    },
    {
      "activity_id": 4,
      "name": "วิทยาลัยการอาชีพ มอบอุปกรณ์จ่ายเจลรุ่นพอเพียง",
      "detail": "ทางวิทยาลัยการอาชีพได้มอบอุปกรณ์จ่ายเจลรุ่นพอเพียงให้แก่บริษัทเกียรติสินโฮลเซล เพื่อใช้ประโยชน์แก่ประชาชนที่มาใช้บริการในช่วงการแพร่ระบาดของโรค Covid –19  เพื่อป้องกันการติดเชื้อของประชาชนจากโรค Covid –19",
      "image": [
        "assets/images/detail-activity/dt-4/1.jpg",
        "assets/images/detail-activity/dt-4/2.jpg",
        "assets/images/detail-activity/dt-4/3.jpg",
        "assets/images/detail-activity/dt-4/4.jpg",
      ]
    },
    {
      "activity_id": 5,
      "name": "เกียรติสิน เราจะสู้ไปด้วยกัน",
      "detail": "บริษัทเกียรติสินโฮลเซล จำกัด  มอบเครื่องปรุงให้กับเทศบาลบ้านไผ่ เพื่อนำไปประกอบอาหาร ให้กับผู้ที่ได้รับผลกระทบในช่วงโรคระบาดไวรัส โควิด -19 และสนับสนุนมอบน้ำดื่ม ให้แก่ กิ่งกาชาดอำเภอบ้านไผ่ พุทธญาณสมาคม โรงพยาบาลบ้านไผ่ ที่ว่าการอำเภอบ้านไผ่ และ สภาบ้านไผ่  เพื่อเป็นกำลังใจให้ผ่านพ้นวิกฤตไปด้วยกัน",
      "image": [
        "assets/images/detail-activity/dt-5/1.jpg",
        "assets/images/detail-activity/dt-5/2.jpg",
        "assets/images/detail-activity/dt-5/3.jpg",
        "assets/images/detail-activity/dt-5/4.jpg",
        "assets/images/detail-activity/dt-5/5.jpg",
      ]
    },
    {
      "activity_id": 6,
      "name": "เกียรติสินร่วมส่งน้ำใจ",
      "detail": "บริษัทเกียรติสินโฮลเซลได้มอบกระเช้าแบรนด์และหน้ากากเฟสชิว ให้แก่โรงพยาบาลในอำเภอบ้านไผ่ เพื่อร่วมส่งกำลังใจให้เจ้าหน้าที่และบุคลากรทางแพทย์ สู้วิกฤต COVID-19 ไปด้วยกัน",
      "image": [
        "assets/images/detail-activity/dt-6/1.jpg",
        "assets/images/detail-activity/dt-6/2.jpg",
        "assets/images/detail-activity/dt-6/3.jpg",
        "assets/images/detail-activity/dt-6/4.jpg",
        "assets/images/detail-activity/dt-6/5.jpg",
        "assets/images/detail-activity/dt-6/6.jpg",
      ]
    },
    {
      "activity_id": 7,
      "name": "เกียรติสิน ตรวจสุขภาพพนักงานประจำปี",
      "detail": "บริษัทเกียรติสินโฮลเซล ได้เข้าร่วมโครงการตรวจสุขภาพผู้ประกันตนฟรี ให้แก่พนักงานเกียรติสินโฮลเซล เพื่อเป็นการหาปัจจัยเสี่ยงของการเกิดโรค หากตรวจพบในระยะเริ่มต้นจะได้รีบรักษาดูแล ปรับเปลี่ยนพฤติกรรมให้ห่างไกลจากโรคต่างๆ การตรวจสุขภาพจึงมีประโยชน์ต่อตัวผู้รับการตรวจ เพราะช่วยให้มีโอกาสป้องกัน และรักษาก่อนที่โรคจะพัฒนาไปมากขึ้น โดยสำนักงานประกันสังคมจังหวัดขอนแก่น ร่วมกับโรงพยาบาลวีระพลการแพทย์",
      "image": [
        "assets/images/detail-activity/dt-7/1.jpg",
        "assets/images/detail-activity/dt-7/2.jpg",
        "assets/images/detail-activity/dt-7/3.jpg",
        "assets/images/detail-activity/dt-7/4.jpg",
      ]
    },
    {
      "activity_id": 8,
      "name": "เกียรติสิน & กะทิเรียลไทย",
      "detail": "บริษัทเกียรติสินโฮลเซลร่วมกับกะทิเรียลไทยได้จัดกิจกรรมการแข่งขันการทำอาหารและของหวาน โดยใช้ส่วนผสมของกะทิเรียลไทย ตามแคมเปญกะทิเรียลไทยอนุรักษ์สืบสานตำนานอาหารไทยอิสาน เพื่ออนุรักษ์ สืบสาน ตำนานอาหารไทยอิสาน และต่อยอดการทำอาหารให้ผู้ประกอบการร้านค้า ทั้งยังอนุรักษ์การแต่งกายแบบประเพณีท้องถิ่นของชาวไทยอิสาน กิจกรรมนี้ยังเสริมสร้างความสามัคคีของทีมงานและท้องถิ่นอีกด้วย",
      "image": [
        "assets/images/detail-activity/dt-8/1.jpg",
        "assets/images/detail-activity/dt-8/2.jpg",
        "assets/images/detail-activity/dt-8/3.jpg",
        "assets/images/detail-activity/dt-8/4.jpg",
        "assets/images/detail-activity/dt-8/5.jpg",
        "assets/images/detail-activity/dt-8/6.jpg",
      ]
    },
    {
      "activity_id": 9,
      "name": "วันเด็ก 2563",
      "detail": "ทางบริษัทเกียรติสินโฮลเซลได้จัดกิจกรรมหลากหลายสำหรับเด็ก เพื่อต้อนรับวันเด็กแห่งชาติ จัดขึ้นที่บริเวรห้างซุปเปอร์มีกิจกรรมให้ร่วมสนุกอีกมากมาย อาทิ เกมส์ระบายสี  แจกขนม ชิงรางวัล กิจกรรมนี้จัดขึ้นเพื่อส่งเสริมให้ผู้ปกครองเห็นความสำคัญของเด็กให้มากขึ้นและสร้างความรีแลคให้ผู้ปกครองและเด็ก",
      "image": [
        "assets/images/detail-activity/dt-9/1.jpg",
        "assets/images/detail-activity/dt-9/2.jpg",
        "assets/images/detail-activity/dt-9/3.jpg",
        "assets/images/detail-activity/dt-9/4.jpg",
      ]
    },
    {
      "activity_id": 10,
      "name": "เกียรติสิน รณรงค์การใช้ถุงพลาสติก",
      "detail": "เกียรติสินโฮลเซลได้ร่วมรณรงค์ ลดการใช้ถุงพลาสติกและปฏิบัติตามนโยบายของภาครัฐและเอกชนทางร้านได้เปลี่ยนจากการใช้ถุงพลาสติกเป็นกล่องลังกระดาษเพื่อลดจำนวนขยะพลาสติก",
      "image": [
        "assets/images/detail-activity/dt-10/1.jpg",
        "assets/images/detail-activity/dt-10/2.jpg",
        "assets/images/detail-activity/dt-10/3.jpg",
        "assets/images/detail-activity/dt-10/4.jpg",
        "assets/images/detail-activity/dt-10/5.jpg",
        "assets/images/detail-activity/dt-10/6.jpg",
      ]
    },
    {
      "activity_id": 11,
      "name": "เกียรติสินช่วยผู้ประสบภัยน้ำท่วม",
      "detail": "บริษัทเกียรติสินโฮลเซล ร่วมกับบริษัทซีโนแปซิฟิค บริษัทกรีนสปอต บริษัทคอลเกต บริษัทสุขสมบูรณ์น้ำมันพืช บริษัทมุ่งพัฒนา บริษัทอิสานรุ่งเรืองฟู้ด บริษัทตะวันแดงดีซีเอ็ม บริษัทแมสมาร์เกตติ้ง ได้ร่วมบริจาคสินค้าอุปโภค บริโภคให้แก่ผู้ประสบภัยน้ำท่วม",
      "image": [
        "assets/images/detail-activity/dt-11/1.jpg",
        "assets/images/detail-activity/dt-11/2.jpg",
        "assets/images/detail-activity/dt-11/3.jpg",
        "assets/images/detail-activity/dt-11/4.jpg",
        "assets/images/detail-activity/dt-11/5.jpg",
        "assets/images/detail-activity/dt-11/6.jpg",
      ]
    },
    {
      "activity_id": 12,
      "name": "เกียรติสินโครงการอบรมค่าใช้จ่าย",
      "detail": "เกียรติสินโฮลเซลได้จัดโครงการอบรมค่าใช้จ่าย โดยนำความรู้จากโครงการ FIN D มาต่อยอดให้พนักงานอีกทั้งแนะนำแนวทางการออมเงินและการใช้เงินอย่างมีประสิทธิภาพ",
      "image": [
        "assets/images/detail-activity/dt-12/1.jpg",
        "assets/images/detail-activity/dt-12/2.jpg",
        "assets/images/detail-activity/dt-12/3.jpg",
        "assets/images/detail-activity/dt-12/4.jpg",
      ]
    },
    {
      "activity_id": 13,
      "name": "เกียรติสิน Street Food",
      "detail": "เกียรติสินโฮลเซลได้จัดงานเกียรติสิน Street Food  ร่วมกับทีมผู้เชี่ยวชาญในด้านการทำอาหาร มีการแนะนำและสาธิตวิธีการทำอาหาร และให้ความรู้เบื้องต้นในการทำอาหารจานเด็ด โดยแนะนำวิธีสร้างไอเดียใหม่ สอนเทคนิคและเคล็ดลับการปรับอาหารธรรมดาให้เมนูที่น่าสนใจ อร่อย ดีต่อสุขภาพ และน่ารับประทาน ด้วยวิธีง่ายๆ ทุกบูธกิจกรรมชิมฟรีตลอดงาน",
      "image": [
        "assets/images/detail-activity/dt-13/1.jpg",
        "assets/images/detail-activity/dt-13/2.jpg",
        "assets/images/detail-activity/dt-13/3.jpg",
        "assets/images/detail-activity/dt-13/4.jpg",
      ]
    },
    {
      "activity_id": 14,
      "name": "เกียรติสิน บาร์ริสต้าร่วมกับเนสเล่",
      "detail": "บริษัทเกียรติสินโฮลเซลร่วมกับบริษัทเนสเล่ ได้ร่วมมือกันสร้างอาชีพให้แก่ชาวบ้านชุมชนท้องถิ่น แนะนำเทคนิคในการชงกาแฟเพื่อนำไปประกอบอาชีพสร้างรายได้",
      "image": [
        "assets/images/detail-activity/dt-14/1.jpg",
        "assets/images/detail-activity/dt-14/2.jpg",
        "assets/images/detail-activity/dt-14/3.jpg",
        "assets/images/detail-activity/dt-14/4.jpg",
        "assets/images/detail-activity/dt-14/5.jpg",
      ]
    },
    {
      "activity_id": 15,
      "name": "เกียรติสินเข้าร่วมโครงการ FIN D",
      "detail": "ธนาคารแห่งประเทศไทยได้จัดโครงการ FIN D ทางบริษัทเกียรติสินได้เข้าร่วมโครงการเพื่อเรียนรู้แนวทางการออมเงิน บาลานซ์ค่าใช้จ่าย แนวคิดวิธีการใช้เงิน เพื่อให้มีเงินเพียงพอต่อการใช้ในอนาคต",
      "image": [
        "assets/images/detail-activity/dt-15/1.jpg",
        "assets/images/detail-activity/dt-15/2.jpg",
        "assets/images/detail-activity/dt-15/3.jpg",
      ]
    },
    {
      "activity_id": 16,
      "name": "เกียรติสิน อบรมเครื่องยนต์",
      "detail": "บริษัทเกียรติสินโฮลเซลได้จัดอบรมเครื่องยนต์ เพื่อสอนและแนะนำ การขับขี่ เทคนิค การตรวจเช็ค วิธีดูแลรักษา รถโฟลกลิฟให้แก่พนักงานเพื่อลดความเสี่ยงต่อการเกิดอุบัติเหตุ",
      "image": [
        "assets/images/detail-activity/dt-16/1.jpg",
        "assets/images/detail-activity/dt-16/2.jpg",
        "assets/images/detail-activity/dt-16/3.jpg",
        "assets/images/detail-activity/dt-16/4.jpg",
      ]
    },
    {
      "activity_id": 17,
      "name": "กิจกรรมเกียรติสิน KIATSIN CUP",
      "detail": "เกียรติสินโฮลเซลได้จัดกิจกรรมการแข่งขันฟุตบอลเยาวชน KIATSIN CUP ขึ้น โดยมีวัตถุประสงค์เพื่อสร้างภูมิคุ้มกันปัญหายาเสพติด ส่งเสริมทักษะด้านกีฬาฟุตบอล พัฒนาเด็กๆ ยุวชนจากรากหญ้าให้มีพัฒนาการก้าวหน้าด้านกีฬาอย่างสม่ำเสมอ ตลอดการส่งเสริมความเป็นเลิศทางด้านกีฬาฟุตบอลสู่ระดับชาติ",
      "image": [
        "assets/images/detail-activity/dt-17/1.jpg",
        "assets/images/detail-activity/dt-17/2.jpg",
        "assets/images/detail-activity/dt-17/3.jpg",
        "assets/images/detail-activity/dt-17/4.jpg",
        "assets/images/detail-activity/dt-17/5.jpg",
      ]
    },
    {
      "activity_id": 18,
      "name": "เกียรติสิน Outing",
      "detail": "บริษัทเกียรติสินโฮลเซลได้จัดกิจกรรม สัมมนานอกพื้นที่ เกียรติสิน Outing จัดขึ้นเพื่อสร้างความรีแลคให้แก่พนักงาน ได้มีกิจกรรมผ่อนคลายทำร่วมกัน สร้างความสัมพันธ์ไมตรีต่อกันระหว่างเพื่อนร่วมงานและหัวหน้างาน",
      "image": [
        "assets/images/detail-activity/dt-18/1.jpg",
        "assets/images/detail-activity/dt-18/2.jpg",
        "assets/images/detail-activity/dt-18/4.jpg",
        "assets/images/detail-activity/dt-18/5.jpg",
        "assets/images/detail-activity/dt-18/6.jpg",
      ]
    },

  ]
  show_data: any
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.moc_data.forEach(element => {
        if (element.activity_id == params["ID"]) {
          this.show_data = element;
        }
      });
    });
  }
}

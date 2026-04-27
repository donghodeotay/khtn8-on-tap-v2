/* questions.js — KHTN 8 HK2 BỘ 2: 186 câu biến thể của 93 câu gốc.
   Mỗi câu gốc có 2 biến thể: rephrase + đổi thứ tự lựa chọn + thay distractor.
   Số liệu trong bài tính giữ nguyên; chỉ thay đổi cách hỏi và lựa chọn. */

window.QUESTIONS = [

/* ========== HÓA HỌC — 88 biến thể (44 originals × 2) ========== */

/* Q1 (BaO formula) — 2 variants */
{subject:"hoa", q:"Trong các công thức sau, công thức nào đúng cho Barium oxide?",
 options:["Ba₂O","Ba(OH)₂","BaO","BaO₂"], correct:2,
 explanation:"Ba có hóa trị II, O có hóa trị II → công thức BaO. Đây là một oxide base."},
{subject:"hoa", q:"Hợp chất tạo bởi Ba (II) và O có công thức:",
 options:["BaO","BaCl₂","Ba₂O₃","BaSO₄"], correct:0,
 explanation:"Ba(II) + O(II) → công thức đơn giản nhất là BaO. Đây là oxide base, tan trong nước tạo Ba(OH)₂."},

/* Q2 (FeO) */
{subject:"hoa", q:"Iron(II) oxide có công thức nào sau đây?",
 options:["FeO","Fe₂O₃","Fe(OH)₂","Fe₃O₄"], correct:0,
 explanation:"Iron(II) = Fe có hóa trị II. Fe(II) + O(II) → FeO. Còn Fe₂O₃ là Iron(III) oxide."},
{subject:"hoa", q:"Khi đốt cháy Fe ở điều kiện thiếu oxygen, sản phẩm chính là Fe(II) oxide có công thức:",
 options:["Fe₂O₃","FeO","FeO₂","Fe₂O"], correct:1,
 explanation:"FeO là sắt (II) oxide, màu đen. Còn Fe₂O₃ (sắt III oxide) màu nâu đỏ và Fe₃O₄ là oxide hỗn hợp."},

/* Q3 (Ca(NO3)2) */
{subject:"hoa", q:"Calcium nitrate có công thức:",
 options:["CaNO₃","Ca₂(NO₃)","Ca(NO₃)₂","Ca₃(NO₃)₂"], correct:2,
 explanation:"Ca(II) + gốc NO₃ (I) → cần 2 gốc NO₃ → Ca(NO₃)₂. Muối này tan trong nước."},
{subject:"hoa", q:"Hợp chất tạo bởi calcium và gốc nitrate là:",
 options:["Ca(NO₃)₂","CaN₂","Ca₃N","CaCO₃"], correct:0,
 explanation:"Calcium nitrate = Ca(NO₃)₂. Phân biệt với CaCO₃ (đá vôi) và CaN₂ (rất hiếm)."},

/* Q4 (H2SO4) */
{subject:"hoa", q:"Acid sulfuric — chứa 2H + gốc sulfate — có công thức:",
 options:["H₂S","HSO₃","H₂SO₃","H₂SO₄"], correct:3,
 explanation:"Acid sulfuric = H₂SO₄ (mạnh). Phân biệt: H₂SO₃ là acid sulfurous (yếu hơn), H₂S là hydrogen sulfide."},
{subject:"hoa", q:"Trong các acid sau, đâu là Sulfuric acid?",
 options:["H₂SO₃","H₂SO₄","HCl","HNO₃"], correct:1,
 explanation:"H₂SO₄ = sulfuric acid (chứa S hóa trị VI). H₂SO₃ là sulfurous (S hóa trị IV). HCl là hydrochloric. HNO₃ là nitric."},

/* Q5 (P2O5) */
{subject:"hoa", q:"Diphosphorus pentoxide nghĩa là 2P + 5O. Công thức của nó là:",
 options:["P₅O₂","PO₅","P₂O₅","P₂O₃"], correct:2,
 explanation:"'Di' = 2, 'penta' = 5 → P₂O₅. Đây là oxide acid của P (V), tương ứng với acid H₃PO₄."},
{subject:"hoa", q:"Khi đốt P trong O₂ dư, khói trắng tạo thành có công thức:",
 options:["P₂O₃","P₂O₅","PO₃","P₂O"], correct:1,
 explanation:"4P + 5O₂ →(t°) 2P₂O₅. P₂O₅ là khói trắng dày đặc, là oxide acid mạnh."},

/* Q6 (Zn3(PO4)2) */
{subject:"hoa", q:"Zinc phosphate có công thức:",
 options:["ZnPO₄","Zn₂(PO₄)","Zn₃(PO₄)₂","Zn(PO₄)₂"], correct:2,
 explanation:"Zn(II) + gốc PO₄(III) → bội chung là 6 → cần 3 Zn và 2 gốc PO₄ → Zn₃(PO₄)₂."},
{subject:"hoa", q:"Hợp chất giữa Zn(II) và PO₄(III) cân bằng hóa trị có công thức:",
 options:["ZnPO₄","Zn₂(PO₄)₃","Zn₃(PO₄)₂","Zn(PO₄)₃"], correct:2,
 explanation:"Zn₃(PO₄)₂: 3×II = 6 (Zn), 2×III = 6 (PO₄) → cân bằng. Áp dụng quy tắc 'chéo hóa trị'."},

/* Q7 (CuCl2 name) */
{subject:"hoa", q:"Tên gọi đầy đủ của muối CuCl₂ là:",
 options:["Đồng(I) clorua","Đồng dichloride","Đồng(II) clorua","Copper sulfate"], correct:2,
 explanation:"Trong CuCl₂, Cl(I) × 2 = 2 → Cu hóa trị II → Đồng(II) clorua / Copper(II) chloride. Cu(I) + Cl(I) sẽ là CuCl."},
{subject:"hoa", q:"Hóa trị của Cu trong CuCl₂ là bao nhiêu, và muối có tên là gì?",
 options:["I — Đồng(I) clorua","II — Đồng(II) clorua","III — Đồng(III) clorua","IV — Đồng(IV) clorua"], correct:1,
 explanation:"Vì có 2 Cl (mỗi Cl hóa trị I) nên Cu phải có hóa trị II. Tên: Đồng(II) clorua."},

/* Q8 (Fe2(SO4)3) */
{subject:"hoa", q:"Trong Fe₂(SO₄)₃, sắt có hóa trị mấy?",
 options:["I","II","III","IV"], correct:2,
 explanation:"Gốc SO₄ hóa trị II × 3 = 6, chia cho 2 nguyên tử Fe → mỗi Fe có hóa trị III. Tên: Sắt(III) sulfate."},
{subject:"hoa", q:"Tên gọi của Fe₂(SO₄)₃ là:",
 options:["Sắt(II) sulfate","Sắt sulfide","Sắt(III) sulfate","Sắt nitrate"], correct:2,
 explanation:"Fe₂(SO₄)₃ = Iron(III) sulfate / Sắt(III) sulfate. Sắt(II) sulfate là FeSO₄."},

/* Q9 (pH=2 acid) */
{subject:"hoa", q:"Một dung dịch có pH bằng 2 thuộc môi trường nào?",
 options:["Trung tính","Acid mạnh","Base","Trung bình"], correct:1,
 explanation:"pH = 2 nhỏ hơn 7 nhiều → môi trường acid (mạnh). Càng xa 7, càng acid/base mạnh hơn."},
{subject:"hoa", q:"Nếu thử dung dịch X với quỳ tím và thấy quỳ tím hóa đỏ, pH của X có thể là:",
 options:["7","9","2","13"], correct:2,
 explanation:"Quỳ tím hóa đỏ = môi trường acid → pH < 7. Trong các đáp án chỉ có pH = 2 < 7."},

/* Q10 (quỳ tím + base) */
{subject:"hoa", q:"Khi nhúng quỳ tím vào dung dịch base, màu của quỳ tím chuyển thành:",
 options:["Đỏ","Tím (không đổi)","Xanh","Vàng"], correct:2,
 explanation:"Acid → quỳ hóa đỏ; base → quỳ hóa xanh; muối/nước trung tính → quỳ giữ màu tím."},
{subject:"hoa", q:"Phenolphtalein không màu chuyển sang HỒNG khi gặp dung dịch:",
 options:["Acid","Base","Muối ăn","Nước cất"], correct:1,
 explanation:"Phenolphtalein hóa hồng trong base (pH ≥ 8,3); không màu trong acid và môi trường trung tính."},

/* Q11 (BaSO4 không tan) */
{subject:"hoa", q:"Trong các muối sau, muối nào KHÔNG tan trong nước?",
 options:["NaCl","KCl","BaSO₄","KNO₃"], correct:2,
 explanation:"BaSO₄ kết tủa trắng, không tan. Tất cả muối Na, K, NO₃ đều tan. Đây là cách nhận biết gốc SO₄²⁻."},
{subject:"hoa", q:"Khi cho Na₂SO₄ tác dụng với BaCl₂, kết tủa trắng xuất hiện. Kết tủa đó là:",
 options:["NaCl","BaSO₄","BaCl₂","Na₂SO₄"], correct:1,
 explanation:"Na₂SO₄ + BaCl₂ → 2NaCl + BaSO₄↓. BaSO₄ là kết tủa trắng — phản ứng đặc trưng để nhận biết SO₄²⁻."},

/* Q12 (ZnO+HCl) */
{subject:"hoa", q:"Sản phẩm muối khi cho ZnO tác dụng với HCl là:",
 options:["Zn","ZnO₂","ZnCl₂","Zn(OH)₂"], correct:2,
 explanation:"ZnO + 2HCl → ZnCl₂ + H₂O. Đây là phản ứng giữa oxide base + acid → muối + nước."},
{subject:"hoa", q:"Phản ứng ZnO + 2HCl → __ + H₂O. Chất còn thiếu là:",
 options:["ZnCl₂","Zn","ZnH₂","ZnO₂"], correct:0,
 explanation:"Cân bằng: 1 Zn = 1 Zn (ZnCl₂); 2 Cl = 2 Cl (ZnCl₂); H+O của H₂O. Vậy chất thiếu là ZnCl₂."},

/* Q13 (CuCl2 + NaOH) */
{subject:"hoa", q:"Phản ứng CuCl₂ + 2NaOH → Cu(OH)₂↓ + ?. Chất ? là:",
 options:["NaCl","2NaCl","Na₂Cl","NaClO"], correct:1,
 explanation:"Cân bằng: có 2 Na ở vế trái → cần 2 NaCl ở vế phải. PT: CuCl₂ + 2NaOH → Cu(OH)₂↓ (xanh) + 2NaCl."},
{subject:"hoa", q:"Khi nhỏ NaOH vào dung dịch CuCl₂, hiện tượng gì xảy ra?",
 options:["Không phản ứng","Tạo kết tủa xanh Cu(OH)₂","Sủi bọt khí","Tỏa khói trắng"], correct:1,
 explanation:"2NaOH + CuCl₂ → Cu(OH)₂↓ (xanh lam) + 2NaCl. Đây là phản ứng trao đổi tạo kết tủa."},

/* Q14 (NH4NO3 + NaOH) */
{subject:"hoa", q:"Khi đun nóng NH₄NO₃ với NaOH, khí gì thoát ra?",
 options:["O₂","H₂","NH₃ (mùi khai)","CO₂"], correct:2,
 explanation:"NH₄NO₃ + NaOH → NH₃↑ + H₂O + NaNO₃. NH₃ là khí có mùi khai đặc trưng."},
{subject:"hoa", q:"Cho NH₄NO₃ tác dụng với NaOH, sản phẩm là:",
 options:["NaNO₃ + H₂O","NH₃ + H₂O + NaNO₃","NH₄OH + NaNO₃","Không phản ứng"], correct:1,
 explanation:"PT đầy đủ: NH₄NO₃ + NaOH → NH₃↑ + H₂O + NaNO₃. NH₃ thoát ra dạng khí."},

/* Q15 (chain step SO2 → Na2SO3) */
{subject:"hoa", q:"Để chuyển SO₂ thành Na₂SO₃, ta cho SO₂ tác dụng với:",
 options:["NaCl","NaOH","HCl","H₂O"], correct:1,
 explanation:"SO₂ là oxide acid. Oxide acid + base NaOH → muối + nước: SO₂ + 2NaOH → Na₂SO₃ + H₂O."},
{subject:"hoa", q:"Trong chuỗi S → SO₂ → Na₂SO₃, bước cuối được thực hiện bằng cách:",
 options:["Đốt SO₂ trong O₂","Cho SO₂ vào NaOH","Cho SO₂ vào HCl","Cho SO₂ vào H₂SO₄"], correct:1,
 explanation:"Bước S → SO₂ là đốt S trong O₂. Bước SO₂ → Na₂SO₃ là cho SO₂ tan trong dung dịch NaOH."},

/* Q16 (MgCl2 điều chế) */
{subject:"hoa", q:"Có thể điều chế MgCl₂ từ chất nào sau đây bằng cách cho tác dụng với HCl?",
 options:["MgSO₄","MgO","NaCl","Cu"], correct:1,
 explanation:"MgO + 2HCl → MgCl₂ + H₂O (oxide base + acid). Cũng có thể dùng Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O."},
{subject:"hoa", q:"Trong các chất MgO, NaCl, Mg(OH)₂, Cu, chất nào KHÔNG dùng được để tạo MgCl₂ với HCl?",
 options:["MgO","NaCl và Cu","Mg(OH)₂","Tất cả đều dùng được"], correct:1,
 explanation:"MgO + HCl → MgCl₂ ✓. Mg(OH)₂ + HCl → MgCl₂ ✓. NaCl không phản ứng với HCl (cùng gốc Cl). Cu không tan trong HCl loãng (kim loại sau H)."},

/* Q17 (NaOH + CuSO4) */
{subject:"hoa", q:"Khi cho NaOH vào dung dịch CuSO₄, kết tủa màu gì xuất hiện?",
 options:["Trắng","Xanh lam","Nâu đỏ","Vàng"], correct:1,
 explanation:"2NaOH + CuSO₄ → Cu(OH)₂↓ (xanh lam) + Na₂SO₄. Kết tủa xanh lam đặc trưng của Cu(OH)₂."},
{subject:"hoa", q:"Sản phẩm tạo thành khi 2NaOH tác dụng với 1CuSO₄ là:",
 options:["CuO + Na₂SO₃","Cu(OH)₂ + Na₂SO₄","Na₂Cu + SO₄(OH)₂","Cu + Na₂SO₄ + H₂O"], correct:1,
 explanation:"Phản ứng trao đổi: 2NaOH + CuSO₄ → Cu(OH)₂↓ + Na₂SO₄. Cu(OH)₂ kết tủa xanh."},

/* Q18 (nhận biết H2SO4 NaOH HCl) */
{subject:"hoa", q:"Phương pháp đơn giản nhất để nhận biết 3 dung dịch H₂SO₄, NaOH và HCl là dùng:",
 options:["Đường","Muối ăn","Quỳ tím rồi BaCl₂","Nước cất"], correct:2,
 explanation:"Bước 1: quỳ tím — NaOH hóa xanh, H₂SO₄ và HCl hóa đỏ. Bước 2: BaCl₂ vào 2 acid — H₂SO₄ tạo BaSO₄ trắng, HCl không phản ứng."},
{subject:"hoa", q:"Để phân biệt H₂SO₄ và HCl (đã biết cả hai đều là acid), ta dùng:",
 options:["Quỳ tím","Dung dịch BaCl₂ (BaSO₄↓ trắng cho H₂SO₄)","Đun nóng","Đường"], correct:1,
 explanation:"H₂SO₄ + BaCl₂ → BaSO₄↓ trắng + 2HCl. HCl không có phản ứng tương tự. Đây là cách phân biệt rõ ràng."},

/* Q19 (Bài 5 C%) */
{subject:"hoa", q:"Hòa tan vừa đủ CaCO₃ vào 200g HCl 7,3%. Khối lượng dung dịch sau phản ứng (sau khi CO₂ thoát ra) là:",
 options:["200 g","211,2 g","220 g","180 g"], correct:1,
 explanation:"n_HCl = 0,4 mol → n_CaCO₃ = 0,2 mol → m_CaCO₃ = 20g. n_CO₂ = 0,2 mol → m_CO₂ = 8,8g (thoát ra). m_dd_sau = 20 + 200 − 8,8 = 211,2g."},
{subject:"hoa", q:"Trong bài toán Bài 5, sau khi CaCO₃ phản ứng vừa đủ với 200g HCl 7,3%, C%(CaCl₂) ≈ ?",
 options:["~5%","~10,5%","~15%","~22%"], correct:1,
 explanation:"m_CaCl₂ = 0,2×111 = 22,2g; m_dd_sau = 211,2g. C% = 22,2/211,2 × 100% ≈ 10,51%."},

/* Q20 (phân đạm N) */
{subject:"hoa", q:"Để cây phát triển thân lá xanh tốt, người nông dân thường bón phân nào?",
 options:["Phân đạm (chứa N)","Phân lân (chứa P)","Phân kali (chứa K)","Phân vi lượng"], correct:0,
 explanation:"Phân đạm chứa N giúp tổng hợp protein, diệp lục → cây phát triển thân lá. P giúp rễ và hoa quả; K tăng sức chống bệnh."},
{subject:"hoa", q:"Urea CO(NH₂)₂ thuộc loại phân nào?",
 options:["Phân đạm","Phân lân","Phân kali","Phân vi lượng"], correct:0,
 explanation:"Urea chứa N (~46,7%) → phân đạm. Đây là phân đạm có hàm lượng N cao nhất, được sử dụng phổ biến."},
/* Q21 — original Q61 (MgSO4 formula) */
{subject:"hoa", q:"Magnesium sulfate có công thức nào sau đây?",
 options:["MgS","Mg₂SO₄","MgSO₃","MgSO₄"], correct:3,
 explanation:"Mg(II) + gốc SO₄(II) → MgSO₄. Đây là muối tan, dùng làm thuốc nhuận tràng (muối Epsom)."},
{subject:"hoa", q:"Hợp chất giữa Mg(II) và gốc sulfate là:",
 options:["MgSO₄","Mg₂SO₄","MgSO₃","Mg(SO₄)₂"], correct:0,
 explanation:"MgSO₄: Mg hóa trị II, SO₄ hóa trị II → tỉ lệ 1:1."},

/* Q22 — KOH */
{subject:"hoa", q:"Potassium hydroxide có công thức:",
 options:["KO","K(OH)₂","KOH","K₂OH"], correct:2,
 explanation:"K(I) + nhóm OH(I) → KOH. Là base mạnh, tan tốt trong nước."},
{subject:"hoa", q:"Hợp chất giữa K và nhóm hydroxide là:",
 options:["KOH","K(OH)₂","KH","K₂OH"], correct:0,
 explanation:"K hóa trị I, OH hóa trị I → KOH. Là một base mạnh điển hình."},

/* Q23 — Cu(OH)2 */
{subject:"hoa", q:"Copper(II) hydroxide có công thức:",
 options:["CuOH","CuO₂H","Cu(OH)₂","Cu(OH)₃"], correct:2,
 explanation:"Cu(II) hóa trị II + OH(I) → cần 2 nhóm OH → Cu(OH)₂. Kết tủa xanh lam, không tan."},
{subject:"hoa", q:"Kết tủa xanh lam tạo ra khi cho NaOH vào CuSO₄ có công thức:",
 options:["CuO","CuS","Cu(OH)₂","CuOH"], correct:2,
 explanation:"2NaOH + CuSO₄ → Cu(OH)₂↓ (xanh) + Na₂SO₄. Cu(OH)₂ là kết tủa xanh lam đặc trưng."},

/* Q24 — ZnSO4 name */
{subject:"hoa", q:"Tên gọi đúng của muối ZnSO₄ là:",
 options:["Kẽm sulfite","Kẽm sulfate","Kẽm sulfua","Kẽm hydroxide"], correct:1,
 explanation:"ZnSO₄ chứa gốc SO₄ → tên 'kẽm sulfate' / Zinc sulfate. Kẽm sulfite là ZnSO₃."},
{subject:"hoa", q:"Khi cho Zn tác dụng với H₂SO₄ loãng, muối tạo thành tên gọi là:",
 options:["Kẽm sulfua","Kẽm sulfate","Kẽm chloride","Kẽm sulfite"], correct:1,
 explanation:"Zn + H₂SO₄ → ZnSO₄ + H₂↑. ZnSO₄ là kẽm sulfate."},

/* Q25 — Na2HPO4 */
{subject:"hoa", q:"Na₂HPO₄ là loại muối nào?",
 options:["Muối trung tính","Muối acid (vẫn còn 1 H trong gốc)","Muối base","Oxide"], correct:1,
 explanation:"Na₂HPO₄ — vẫn còn 1 H ở gốc PO₄ → là muối acid. Tên: Natri hidrophotphat."},
{subject:"hoa", q:"Trong các muối Na₃PO₄, Na₂HPO₄, NaH₂PO₄, muối ở giữa (1H còn lại) gọi là:",
 options:["Natri photphat","Natri hidrophotphat","Natri đihidrophotphat","Natri sulfate"], correct:1,
 explanation:"Quy tắc: Na₃PO₄ (0H) = natri photphat; Na₂HPO₄ (1H) = natri hidrophotphat; NaH₂PO₄ (2H) = natri đihidrophotphat."},

/* Q26 — phân loại */
{subject:"hoa", q:"Trong các chất H₂SO₄, NaOH, CO₂, NaCl — chất nào là OXIDE?",
 options:["H₂SO₄","NaOH","CO₂","NaCl"], correct:2,
 explanation:"H₂SO₄ = acid; NaOH = base; CO₂ = oxide acid (2 nguyên tố, có O); NaCl = muối."},
{subject:"hoa", q:"Phân loại nào sau đây là SAI?",
 options:["HCl là acid","KOH là base","Fe₂O₃ là oxide","NaCl là base"], correct:3,
 explanation:"NaCl là MUỐI (kim loại + gốc acid), không phải base. Còn HCl=acid, KOH=base, Fe₂O₃=oxide đều đúng."},

/* Q27 — MgCl2 + 2HNO3 */
{subject:"hoa", q:"Hoàn thành phản ứng: MgCl₂ + 2HNO₃ → ? + 2HCl. Sản phẩm còn thiếu là:",
 options:["MgN₂","Mg(NO₃)₂","MgO","MgH"], correct:1,
 explanation:"Cân bằng: 1 Mg + 2 NO₃ → Mg(NO₃)₂. PT: MgCl₂ + 2HNO₃ → Mg(NO₃)₂ + 2HCl. Đây là phản ứng trao đổi muối + acid."},
{subject:"hoa", q:"Phản ứng giữa MgCl₂ và HNO₃ tạo ra:",
 options:["Khí HCl thoát ra và muối Mg(NO₃)₂","Mg(OH)₂ kết tủa","Khí H₂","Không phản ứng"], correct:0,
 explanation:"MgCl₂ + 2HNO₃ → Mg(NO₃)₂ + 2HCl. HCl tạo ra dạng dung dịch (không thoát ra mạnh ở loãng)."},

/* Q28 — BaCl2 + Na2SO4 */
{subject:"hoa", q:"Để có phản ứng: ? + Na₂SO₄ → BaSO₄↓ + 2NaCl, chất ? là:",
 options:["BaO","Ba(OH)₂","BaCl₂","Ba"], correct:2,
 explanation:"Cần Ba và Cl ở vế trái → BaCl₂. PT: BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl. Phản ứng tạo kết tủa trắng."},
{subject:"hoa", q:"Khi trộn dung dịch BaCl₂ với Na₂SO₄, sản phẩm gồm:",
 options:["NaCl + BaSO₄ kết tủa trắng","Ba(OH)₂ + Na₂Cl","Khí H₂","Không phản ứng"], correct:0,
 explanation:"BaCl₂ + Na₂SO₄ → 2NaCl (tan) + BaSO₄↓ (kết tủa trắng). Dùng để nhận biết SO₄²⁻ hoặc Ba²⁺."},

/* Q29 — Al + CuCl2 */
{subject:"hoa", q:"Khi nhúng lá Al vào dung dịch CuCl₂, hiện tượng quan sát được:",
 options:["Không có gì xảy ra","Cu màu đỏ bám lên Al, dung dịch nhạt màu xanh","Khí O₂ thoát ra","Tỏa khói trắng"], correct:1,
 explanation:"2Al + 3CuCl₂ → 2AlCl₃ + 3Cu. Al mạnh hơn Cu (đứng trước trong dãy hoạt động) → đẩy Cu ra. Cu đỏ bám lên, dd CuCl₂ xanh nhạt dần."},
{subject:"hoa", q:"Phản ứng giữa Al và CuCl₂ là loại phản ứng nào?",
 options:["Phản ứng hóa hợp","Phản ứng phân hủy","Phản ứng thế (kim loại mạnh đẩy kim loại yếu)","Phản ứng trao đổi"], correct:2,
 explanation:"Al thay thế Cu trong muối → đây là phản ứng THẾ. PT: 2Al + 3CuCl₂ → 2AlCl₃ + 3Cu."},

/* Q30 — H2SO4 + Na2CO3 */
{subject:"hoa", q:"Khi nhỏ H₂SO₄ loãng vào dung dịch Na₂CO₃, hiện tượng:",
 options:["Tạo kết tủa trắng","Sủi bọt khí CO₂, dung dịch trong","Tỏa nhiệt mạnh không sủi bọt","Đổi màu xanh"], correct:1,
 explanation:"H₂SO₄ + Na₂CO₃ → Na₂SO₄ + H₂O + CO₂↑. Sủi bọt khí CO₂ là dấu hiệu của phản ứng acid + carbonate."},
{subject:"hoa", q:"Sản phẩm khi cho acid sulfuric loãng tác dụng với sodium carbonate gồm:",
 options:["Na₂SO₃ + H₂O","Na₂SO₄ + H₂O + CO₂","NaSO₄ + CO₃H","Không phản ứng"], correct:1,
 explanation:"H₂SO₄ + Na₂CO₃ → Na₂SO₄ + H₂O + CO₂↑. Acid mạnh đẩy CO₂ ra khỏi muối carbonate."},

/* Q31 — NaOH + HCl + phenolphtalein */
{subject:"hoa", q:"Nhỏ NaOH (có sẵn phenolphtalein không màu) vào HCl cho đến dư. Màu dung dịch sẽ:",
 options:["Luôn không màu","Đổi sang đỏ rồi xanh","Không màu, sau đó chuyển HỒNG khi NaOH dư","Vàng nhạt"], correct:2,
 explanation:"Lúc đầu HCl vẫn dư → môi trường acid → phenolphtalein không màu. Khi NaOH dư → môi trường base → phenolphtalein chuyển hồng. Hồng = dấu hiệu trung hòa kết thúc."},
{subject:"hoa", q:"Phenolphtalein chuyển sang màu hồng tại thời điểm nào trong thí nghiệm trung hòa NaOH–HCl?",
 options:["Khi mới bắt đầu","Khi acid HCl còn dư","Khi NaOH bắt đầu dư","Không bao giờ"], correct:2,
 explanation:"Phenolphtalein chỉ hồng khi pH ≥ 8,3. Trong khi HCl còn dư hoặc vừa đủ thì pH ≤ 7. Khi NaOH dư thì pH > 7 → bắt đầu hồng."},

/* Q32 — 4 dd nhận biết */
{subject:"hoa", q:"Để nhận biết 4 dung dịch không nhãn (NaCl, Ba(OH)₂, NaOH, Na₂SO₄), chỉ dùng 1 hóa chất nào?",
 options:["Quỳ tím","H₂SO₄","Đường","Nước"], correct:1,
 explanation:"H₂SO₄ phân biệt được 4 chất: Ba(OH)₂ → BaSO₄↓ + nước (đặc trưng); NaOH → trung hòa, dùng quỳ xác nhận; Na₂SO₄ và NaCl không phản ứng (phân biệt bằng quỳ riêng)."},
{subject:"hoa", q:"Khi nhỏ H₂SO₄ vào 4 mẫu (NaCl, Ba(OH)₂, NaOH, Na₂SO₄), mẫu nào tạo kết tủa trắng?",
 options:["NaCl","Ba(OH)₂","NaOH","Na₂SO₄"], correct:1,
 explanation:"Ba(OH)₂ + H₂SO₄ → BaSO₄↓ trắng + 2H₂O. Ba²⁺ kết hợp SO₄²⁻ tạo kết tủa đặc trưng."},

/* Q33 — Bài 6a Na2SO4 */
{subject:"hoa", q:"Trung hòa 200 mL H₂SO₄ 1M bằng NaOH 20%. Khối lượng muối Na₂SO₄ tạo thành là:",
 options:["14,2 g","28,4 g","56,8 g","142 g"], correct:1,
 explanation:"PT: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. n_H₂SO₄ = 0,2 mol → n_Na₂SO₄ = 0,2 mol → m = 0,2 × 142 = 28,4g."},
{subject:"hoa", q:"Khi 0,2 mol H₂SO₄ phản ứng vừa đủ với NaOH, số mol Na₂SO₄ tạo thành:",
 options:["0,1 mol","0,2 mol","0,4 mol","2 mol"], correct:1,
 explanation:"Tỉ lệ 1:1 giữa H₂SO₄ và Na₂SO₄ → n_Na₂SO₄ = n_H₂SO₄ = 0,2 mol."},

/* Q34 — Bài 6b m_dd NaOH */
{subject:"hoa", q:"Với 0,2 mol H₂SO₄ (cần 0,4 mol NaOH), khối lượng dung dịch NaOH 20% phải dùng:",
 options:["16 g","20 g","40 g","80 g"], correct:3,
 explanation:"m_NaOH chất tan = 0,4 × 40 = 16g. Dung dịch 20% nghĩa là 16g chất tan trong dd có khối lượng 16/0,20 = 80g."},
{subject:"hoa", q:"Nếu dung dịch NaOH có nồng độ 20% và cần 16g NaOH chất tan, khối lượng dung dịch cần lấy là:",
 options:["16 g","32 g","80 g","100 g"], correct:2,
 explanation:"m_dd = m_chất tan / C% = 16 / 0,20 = 80g. Trong 100g dd 20% có 20g NaOH, nên 16g cần 80g dd."},

/* Q35 — Ca3(PO4)2 name */
{subject:"hoa", q:"Tên gọi của muối Ca₃(PO₄)₂ là:",
 options:["Calcium nitrate","Calcium phosphate","Calcium sulfate","Calcium hydroxide"], correct:1,
 explanation:"Ca₃(PO₄)₂ chứa gốc PO₄ → tên 'calcium phosphate'. Đây là thành phần chính của xương, răng, và quặng apatit."},
{subject:"hoa", q:"Hợp chất Ca₃(PO₄)₂ có thành phần gốc nào?",
 options:["Gốc nitrate (NO₃)","Gốc phosphate (PO₄)","Gốc sulfate (SO₄)","Gốc carbonate (CO₃)"], correct:1,
 explanation:"Trong Ca₃(PO₄)₂, có 2 nhóm PO₄ → gốc phosphate. Tên: calcium phosphate."},

/* Q36 — NaH2PO4 name */
{subject:"hoa", q:"NaH₂PO₄ — gốc PO₄ vẫn còn 2H — gọi tên là:",
 options:["Natri photphat","Natri hidrophotphat","Natri đihidrophotphat","Natri sulfate"], correct:2,
 explanation:"Quy ước: số H trong tên — 0H = photphat, 1H = hidrophotphat, 2H = ĐIhidrophotphat. NaH₂PO₄ có 2H → đihidrophotphat."},
{subject:"hoa", q:"So sánh tên Na₂HPO₄ và NaH₂PO₄ — cả hai đều là muối acid, khác nhau ở:",
 options:["Cùng tên gọi","Số H trong gốc (1 vs 2) → tên khác (hidro vs đihidro)","Loại gốc khác","Nguyên tố khác"], correct:1,
 explanation:"Na₂HPO₄ = natri HIDROphotphat (1H). NaH₂PO₄ = natri ĐIHIDROphotphat (2H). Cùng gốc, khác số H còn lại."},

/* Q37 — phân loại */
{subject:"hoa", q:"Trong 4 chất sau, đâu là acid?",
 options:["NaOH","HCl","NaCl","CaO"], correct:1,
 explanation:"HCl = acid (H + gốc Cl). NaOH = base, NaCl = muối, CaO = oxide base."},
{subject:"hoa", q:"Đâu là phân loại đúng?",
 options:["CO₂ là base","NaOH là acid","CaCO₃ là muối","H₂SO₄ là oxide"], correct:2,
 explanation:"CaCO₃ = Ca + gốc CO₃ → muối ✓. CO₂ là oxide acid; NaOH là base; H₂SO₄ là acid."},

/* Q38 — P2O5 + 6KOH balance */
{subject:"hoa", q:"Hệ số trước KOH trong phương trình P₂O₅ + ? KOH → 2K₃PO₄ + 3H₂O là:",
 options:["3","4","6","8"], correct:2,
 explanation:"P₂O₅ + 6KOH → 2K₃PO₄ + 3H₂O. Kiểm: P (2=2 ✓), K (6=6 ✓), H (6=6 ✓), O (11=11 ✓)."},
{subject:"hoa", q:"Trong phương trình P₂O₅ + 6KOH → 2K₃PO₄ + 3H₂O, vai trò của P₂O₅ là:",
 options:["Acid","Base","Oxide acid (tương ứng acid H₃PO₄)","Muối"], correct:2,
 explanation:"P₂O₅ là oxide acid của P(V), tương ứng với acid H₃PO₄. Khi gặp base KOH → tạo muối + nước."},

/* Q39 — Na2SO3 → NaCl */
{subject:"hoa", q:"Trong chuỗi … → Na₂SO₃ → NaCl, để chuyển Na₂SO₃ sang NaCl ta dùng:",
 options:["NaOH","HCl","H₂O","O₂"], correct:1,
 explanation:"Na₂SO₃ + 2HCl → 2NaCl + H₂O + SO₂↑. Acid mạnh đẩy SO₂ (khí) ra khỏi muối Na₂SO₃ → tạo NaCl."},
{subject:"hoa", q:"Phản ứng Na₂SO₃ + 2HCl tạo ra:",
 options:["NaCl + H₂O + SO₂↑","Na₂Cl₂ + H₂SO₃","NaSO₃ + HCl","Không phản ứng"], correct:0,
 explanation:"Na₂SO₃ + 2HCl → 2NaCl + H₂O + SO₂↑. Sủi khí SO₂ có mùi hắc."},

/* Q40 — Fe → FeCl2 */
{subject:"hoa", q:"Để chuyển Fe → FeCl₂, dùng chất nào?",
 options:["Cl₂ ở t° cao","HCl","NaOH","H₂O"], correct:1,
 explanation:"Fe + 2HCl → FeCl₂ + H₂↑. Phản ứng kim loại + acid → muối Fe(II) + khí. Lưu ý: dùng Cl₂ ở t° cao sẽ tạo FeCl₃ (sắt III)."},
{subject:"hoa", q:"Khi Fe phản ứng với HCl loãng, sản phẩm muối là:",
 options:["FeCl","FeCl₂","FeCl₃","Fe(OH)₂"], correct:1,
 explanation:"Fe + 2HCl → FeCl₂ + H₂↑. HCl chỉ tạo Fe(II)Cl₂. Để có FeCl₃ cần Cl₂ + Fe ở nhiệt độ cao."},

/* Q41 — CaO + H2O */
{subject:"hoa", q:"Cho CaO vào nước, sản phẩm tạo thành là:",
 options:["CaCl₂","Ca(OH)₂ — base, làm quỳ tím xanh","CaO₂","CaCO₃"], correct:1,
 explanation:"CaO + H₂O → Ca(OH)₂ (vôi tôi). Phản ứng tỏa nhiệt mạnh. Ca(OH)₂ là base, làm quỳ tím hóa xanh."},
{subject:"hoa", q:"Hiện tượng khi cho vôi sống (CaO) tác dụng với nước:",
 options:["Không có hiện tượng","Tỏa nhiệt mạnh, tạo Ca(OH)₂ (vôi tôi)","Sủi bọt khí","Đổi màu vàng"], correct:1,
 explanation:"CaO + H₂O → Ca(OH)₂. Phản ứng tỏa nhiệt rất mạnh — đây là cách 'tôi vôi' truyền thống."},

/* Q42 — SO2 + H2O */
{subject:"hoa", q:"SO₂ tan trong nước tạo thành dung dịch có tính chất gì?",
 options:["Trung tính","Acid (làm quỳ tím đỏ)","Base","Không tan"], correct:1,
 explanation:"SO₂ + H₂O ⇌ H₂SO₃ (acid sulfurơ). Acid này làm quỳ tím hóa đỏ. Đây là nguyên nhân của mưa acid."},
{subject:"hoa", q:"Mưa acid có liên quan đến hiện tượng nào?",
 options:["CO₂ trong khí quyển","SO₂ và NOₓ tan trong nước mưa tạo acid","Đốt rác hữu cơ","Quang hợp của cây"], correct:1,
 explanation:"SO₂ + H₂O → H₂SO₃; NO₂ + H₂O → HNO₃. Các acid này khi rơi xuống tạo mưa acid, ăn mòn công trình và cây cối."},

/* Q43 — phân lân */
{subject:"hoa", q:"Để giúp cây ra hoa kết quả tốt, người ta thường bón phân nào?",
 options:["Phân đạm (N)","Phân lân (P)","Phân kali (K)","Không cần bón"], correct:1,
 explanation:"P giúp bộ rễ phát triển, ra hoa, kết quả. Vì vậy ở giai đoạn ra hoa, bón thêm phân lân (superphosphate)."},
{subject:"hoa", q:"Superphosphate Ca(H₂PO₄)₂ thuộc loại phân nào?",
 options:["Phân đạm","Phân lân","Phân kali","Phân vi lượng"], correct:1,
 explanation:"Superphosphate chứa P → phân lân. Đây là loại phân lân phổ biến và dễ tan trong nước."},

/* Q44 — phân kali + NPK */
{subject:"hoa", q:"KCl, K₂SO₄ thuộc loại phân nào?",
 options:["Phân đạm","Phân lân","Phân kali","Phân vi lượng"], correct:2,
 explanation:"Cả hai chứa K → phân kali. K tăng sức chống bệnh và phẩm chất nông sản."},
{subject:"hoa", q:"Phân NPK 16-16-8 chứa các nguyên tố chính nào, theo thứ tự?",
 options:["Na, P, K","N, P, K (đạm-lân-kali)","Ni, Pt, K","N, Pb, K"], correct:1,
 explanation:"NPK = Nitrogen + Phosphorus + Potassium. Số 16-16-8 cho biết tỉ lệ % N-P-K trong phân hỗn hợp."},
/* ===== VẬT LÝ — 52 variants (26 originals × 2) ===== */

/* L1 — Archimedes phương chiều */
{subject:"ly", q:"Lực đẩy Archimedes do chất lỏng tác dụng lên vật có chiều:",
 options:["Hướng xuống","Hướng lên (theo phương thẳng đứng)","Theo dòng nước","Theo trọng lực"], correct:1,
 explanation:"Lực đẩy Archimedes có phương thẳng đứng, chiều từ DƯỚI lên TRÊN — ngược chiều trọng lực."},
{subject:"ly", q:"Khi nhúng một vật vào chất lỏng, lực đẩy Archimedes có:",
 options:["Phương ngang, theo dòng chảy","Phương thẳng đứng, hướng từ dưới lên","Phương xiên 45°","Không có phương xác định"], correct:1,
 explanation:"Lực đẩy Archimedes luôn thẳng đứng và hướng lên — đây là đặc điểm quan trọng phân biệt với trọng lực."},

/* L2 — vật nổi */
{subject:"ly", q:"Một vật ở trạng thái NỔI khi:",
 options:["P (trọng lực) > F_A","P = F_A","P < F_A (lực đẩy lớn hơn trọng lực)","Không có lực đẩy"], correct:2,
 explanation:"P < F_A → vật bị đẩy lên → nổi. P > F_A → chìm. P = F_A → lơ lửng. Đây là điều kiện 3 trạng thái."},
{subject:"ly", q:"Tàu bằng thép NẶNG, vẫn nổi được trên nước, là do:",
 options:["Thép nhẹ hơn nước","Phần thân tàu chứa không khí làm thể tích chiếm chỗ lớn → F_A lớn hơn P","Tàu được sơn đặc biệt","Nước biển có muối"], correct:1,
 explanation:"Tàu thiết kế rỗng → V phần ngập trong nước rất lớn → F_A = d.V cũng lớn → cân bằng/lớn hơn trọng lực → nổi."},

/* L3 — nhiễm điện cọ xát */
{subject:"ly", q:"Khi cọ xát thước nhựa vào tóc khô, thước có thể:",
 options:["Phát sáng","Hút các vật nhẹ (giấy, bụi)","Tự nóng chảy","Đẩy mọi vật"], correct:1,
 explanation:"Vật nhiễm điện do cọ xát có khả năng hút các vật nhẹ (mẩu giấy, tóc, bụi nhỏ)."},
{subject:"ly", q:"Vào mùa đông khô hanh, khi cởi áo len thấy có tia lửa nhỏ và cảm giác tê tay. Hiện tượng này là do:",
 options:["Áo nóng lên","Sự nhiễm điện do cọ xát giữa áo và da","Có hơi nước trong không khí","Áo bị hỏng"], correct:1,
 explanation:"Áo len cọ xát da/áo lót khô → các vật nhiễm điện trái dấu → khi tách ra có sự phóng điện nhỏ (tia lửa, cảm giác tê)."},

/* L4 — hai điện tích cùng dấu */
{subject:"ly", q:"Hai vật nhiễm điện CÙNG DẤU sẽ:",
 options:["Hút nhau","Đẩy nhau","Trung hòa nhau","Không tương tác"], correct:1,
 explanation:"Quy luật cơ bản: cùng dấu đẩy nhau, trái dấu hút nhau (giống/trái)."},
{subject:"ly", q:"Hai quả cầu nhỏ đều nhiễm điện âm. Khi đặt gần nhau, chúng:",
 options:["Hút nhau","Đẩy nhau","Hòa trộn nhau","Đứng yên không đổi"], correct:1,
 explanation:"Cả hai cùng dấu (âm) → đẩy nhau. Đây là cơ sở để xác định loại điện tích bằng quan sát tương tác."},

/* L5 — định nghĩa dòng điện */
{subject:"ly", q:"Dòng điện được định nghĩa là:",
 options:["Sự chuyển động hỗn loạn của phân tử","Dòng chuyển dời CÓ HƯỚNG của các hạt mang điện","Sóng âm trong dây dẫn","Sự nóng lên của kim loại"], correct:1,
 explanation:"Dòng điện = các hạt mang điện (electron trong kim loại, ion trong dung dịch) di chuyển có hướng. Quan trọng là 'có hướng', không phải hỗn loạn."},
{subject:"ly", q:"Trong dây kim loại, hạt nào tạo nên dòng điện?",
 options:["Proton","Neutron","Electron tự do","Nguyên tử trung hòa"], correct:2,
 explanation:"Trong kim loại, các electron tự do (không liên kết chặt với hạt nhân) di chuyển có hướng dưới tác dụng của hiệu điện thế → tạo dòng điện."},

/* L6 — chiều quy ước */
{subject:"ly", q:"Quy ước chiều dòng điện trong mạch ngoài đi từ:",
 options:["Cực âm → cực dương","Cực dương → cực âm","Hai chiều cùng lúc","Không xác định"], correct:1,
 explanation:"Quy ước (lịch sử): dòng điện chạy từ cực + qua mạch ngoài (qua tải) về cực −. Lưu ý: thực tế electron đi ngược chiều."},
{subject:"ly", q:"Trong sơ đồ mạch điện, chiều dòng điện được vẽ bằng:",
 options:["Đường gạch","Mũi tên đi từ + qua mạch ngoài về − của nguồn","Chấm tròn","Hai mũi tên ngược chiều"], correct:1,
 explanation:"Mũi tên chỉ chiều dòng điện, đi từ cực dương → mạch ngoài → cực âm theo quy ước."},

/* L7 — nguồn điện */
{subject:"ly", q:"Trong các vật sau, vật nào KHÔNG phải là nguồn điện?",
 options:["Pin AA","Ắc quy","Máy phát điện","Bóng đèn"], correct:3,
 explanation:"Bóng đèn là thiết bị tiêu thụ điện. Nguồn điện là vật cung cấp năng lượng điện: pin, ắc quy, máy phát điện, pin mặt trời."},
{subject:"ly", q:"Đặc điểm chung của nguồn điện là:",
 options:["Tiêu thụ điện năng","Cung cấp năng lượng điện cho mạch","Phát sáng","Tỏa nhiệt"], correct:1,
 explanation:"Nguồn điện tạo và duy trì hiệu điện thế giữa hai cực, từ đó cung cấp năng lượng điện cho thiết bị tiêu thụ trong mạch."},

/* L8 — vật cách điện */
{subject:"ly", q:"Trong các chất sau, chất nào CÁCH ĐIỆN tốt nhất?",
 options:["Đồng","Sắt","Sứ","Nhôm"], correct:2,
 explanation:"Sứ, nhựa, gỗ khô, thủy tinh, cao su là vật cách điện. Đồng/sắt/nhôm là kim loại — dẫn điện."},
{subject:"ly", q:"Vỏ dây điện được làm bằng nhựa chứ không phải đồng vì:",
 options:["Nhựa rẻ hơn","Nhựa cách điện, ngăn không cho dòng điện rò ra ngoài","Nhựa nhẹ hơn","Nhựa đẹp hơn"], correct:1,
 explanation:"Nhựa là vật cách điện, bao bọc lõi đồng (dẫn điện) ngăn người chạm vào dòng điện và ngăn chập mạch."},

/* L9 — bạc dẫn điện */
{subject:"ly", q:"Trong các kim loại sau, kim loại nào DẪN ĐIỆN tốt nhất?",
 options:["Sắt","Nhôm","Đồng","Bạc"], correct:3,
 explanation:"Thứ tự dẫn điện: Bạc > Đồng > Vàng > Nhôm > Sắt. Tuy nhiên đồng được dùng phổ biến vì rẻ hơn bạc nhiều."},
{subject:"ly", q:"Tại sao dây điện thường làm bằng đồng dù bạc dẫn điện tốt hơn?",
 options:["Đồng nhẹ hơn bạc","Đồng rẻ hơn bạc nhiều","Bạc không dẫn điện ngoài trời","Đồng nóng chảy thấp hơn"], correct:1,
 explanation:"Bạc là kim loại quý đắt tiền. Đồng vẫn dẫn điện rất tốt và giá thành thấp hơn nhiều → được dùng phổ biến."},

/* L10 — mạch điện đơn giản */
{subject:"ly", q:"Một mạch điện đơn giản tối thiểu phải có:",
 options:["Chỉ pin","Chỉ bóng đèn","Pin + dây dẫn + bóng đèn (tải) + công tắc","Chỉ công tắc"], correct:2,
 explanation:"Mạch tối thiểu: nguồn (pin) + dây dẫn + thiết bị tiêu thụ (đèn) + công tắc để điều khiển đóng/ngắt."},
{subject:"ly", q:"Để bóng đèn sáng, mạch điện phải:",
 options:["Hở (công tắc mở)","Kín (công tắc đóng) — dòng điện chạy qua","Có nhiều bóng đèn","Có nhiều pin"], correct:1,
 explanation:"Mạch kín nghĩa là công tắc đóng → dòng điện liên tục chạy qua đèn → đèn sáng. Mạch hở → đèn tắt."},

/* L11 — công tắc mở */
{subject:"ly", q:"Khi công tắc ở vị trí MỞ, mạch điện đang ở trạng thái:",
 options:["Mạch kín, đèn sáng","Mạch hở, không có dòng điện qua tải","Bị chập mạch","Quá tải"], correct:1,
 explanation:"Công tắc mở → mạch hở → không có dòng điện chạy qua → đèn tắt."},
{subject:"ly", q:"Vai trò của công tắc trong mạch điện là:",
 options:["Tiêu thụ điện","Đóng/ngắt mạch để điều khiển dòng điện","Tăng cường độ dòng điện","Phát sáng"], correct:1,
 explanation:"Công tắc là thiết bị điều khiển: đóng (mạch kín) cho phép dòng điện chạy; mở (mạch hở) ngắt dòng điện."},

/* L12 — tác dụng nhiệt */
{subject:"ly", q:"Bàn là, bếp điện hoạt động dựa trên tác dụng nào của dòng điện?",
 options:["Tác dụng phát sáng","Tác dụng nhiệt","Tác dụng từ","Tác dụng hóa học"], correct:1,
 explanation:"Khi dòng điện qua dây điện trở, dây nóng lên → biến điện năng thành nhiệt năng. Ứng dụng: bàn là, bếp điện, ấm điện."},
{subject:"ly", q:"Đèn dây tóc nóng sáng là kết quả của tác dụng nào?",
 options:["Tác dụng nhiệt (dây tóc nóng đỏ → phát sáng)","Tác dụng từ","Tác dụng hóa học","Tác dụng sinh lý"], correct:0,
 explanation:"Đèn dây tóc dùng tác dụng nhiệt — dây tóc volfram nóng đến vài nghìn độ → phát sáng. Còn đèn LED, huỳnh quang dùng tác dụng phát sáng trực tiếp."},

/* L13 — mạ bạc */
{subject:"ly", q:"Mạ bạc đồng hồ thép sử dụng tác dụng nào của dòng điện?",
 options:["Tác dụng nhiệt","Tác dụng phát sáng","Tác dụng hóa học","Tác dụng từ"], correct:2,
 explanation:"Mạ điện dùng tác dụng HÓA HỌC — đặt vật cần mạ làm cực âm trong dung dịch muối bạc, dòng điện làm Ag bám lên vật."},
{subject:"ly", q:"Phương pháp mạ bạc cho đồng hồ thép gồm:",
 options:["Đốt nóng đồng hồ với bạc","Nhúng đồng hồ (cực âm) vào dung dịch muối bạc, dùng tấm bạc làm cực dương","Sơn lên bằng cọ","Dùng nam châm hút bạc lên"], correct:1,
 explanation:"Đồng hồ làm catot (-), tấm bạc làm anot (+) trong bể chứa AgNO₃. Dòng điện làm Ag²⁺ di chuyển và bám lên đồng hồ."},

/* L14 — cường độ dòng điện */
{subject:"ly", q:"Đại lượng đo độ mạnh, yếu của dòng điện là:",
 options:["Hiệu điện thế","Cường độ dòng điện (I)","Khối lượng","Thời gian"], correct:1,
 explanation:"I (cường độ dòng điện) đặc trưng cho mức độ mạnh, yếu của dòng điện. Đo bằng ampe (A)."},
{subject:"ly", q:"Cường độ dòng điện CÀNG LỚN, dòng điện CÀNG:",
 options:["Yếu","Mạnh","Đổi chiều","Tắt"], correct:1,
 explanation:"I càng lớn → dòng càng mạnh → tác dụng (nhiệt, sáng, từ…) càng mạnh."},

/* L15 — đơn vị V và A */
{subject:"ly", q:"Cặp đơn vị nào sau đây dùng để đo cường độ dòng điện và hiệu điện thế?",
 options:["Watt và Joule","Ampe và Vôn","Pascal và Newton","Mole và gram"], correct:1,
 explanation:"I (cường độ dòng điện) đo bằng Ampe (A). U (hiệu điện thế) đo bằng Vôn (V)."},
{subject:"ly", q:"Một bóng đèn ghi 220V — 5A. Đơn vị V và A lần lượt là của:",
 options:["Khối lượng và thời gian","Hiệu điện thế và cường độ dòng điện","Áp suất và lực","Điện trở và công suất"], correct:1,
 explanation:"V = đơn vị hiệu điện thế (Vôn). A = đơn vị cường độ dòng điện (Ampe)."},

/* L16 — ampe kế nối tiếp */
{subject:"ly", q:"Để đo cường độ dòng điện qua bóng đèn, ampe kế phải mắc:",
 options:["Song song với đèn","Nối tiếp với đèn","Cùng cực với đèn","Bỏ qua đèn"], correct:1,
 explanation:"Ampe kế có điện trở RẤT NHỎ → mắc nối tiếp để dòng điện đi qua cả ampe kế và đèn. Nếu mắc song song sẽ chập mạch."},
{subject:"ly", q:"Sự khác biệt giữa cách mắc ampe kế và vôn kế là:",
 options:["Cả hai mắc giống nhau","Ampe kế nối tiếp, vôn kế song song","Ampe kế song song, vôn kế nối tiếp","Đều mắc bất kỳ"], correct:1,
 explanation:"Ampe kế (đo I) — nối tiếp (R nhỏ). Vôn kế (đo U) — song song với đoạn cần đo (R lớn). Đây là quy tắc cơ bản."},

/* L17 — năng lượng nhiệt */
{subject:"ly", q:"Năng lượng nhiệt của một vật là:",
 options:["Khối lượng của vật","Tổng động năng chuyển động hỗn loạn của các phân tử","Khối lượng riêng","Thể tích"], correct:1,
 explanation:"Nhiệt năng (phần lớn) = tổng động năng chuyển động hỗn loạn của phân tử. Vật nóng → phân tử chuyển động nhanh → nhiệt năng lớn."},
{subject:"ly", q:"Khi nhiệt độ vật tăng, các phân tử của nó:",
 options:["Đứng yên","Chuyển động chậm hơn","Chuyển động nhanh hơn → nội năng tăng","Biến mất"], correct:2,
 explanation:"T tăng → động năng phân tử tăng → chuyển động nhanh hơn → nội năng (tổng năng lượng phân tử) tăng."},

/* L18 — đun nước nhiệt độ tăng */
{subject:"ly", q:"Khi đun nước, nhiệt độ tăng dần là vì:",
 options:["Nước hao đi","Phân tử nước nhận thêm năng lượng → chuyển động nhanh hơn → nội năng tăng","Bếp lạnh đi","Nước nặng hơn"], correct:1,
 explanation:"Nhiệt từ bếp truyền vào nước → các phân tử nước nhận năng lượng và chuyển động nhanh hơn → nội năng và nhiệt độ tăng."},
{subject:"ly", q:"Trong quá trình đun nước trước khi sôi, năng lượng từ bếp được chuyển thành:",
 options:["Cơ năng","Nội năng (nhiệt năng) của nước","Hóa năng","Quang năng"], correct:1,
 explanation:"Năng lượng từ bếp → nội năng của nước → nhiệt độ tăng. Đây là quá trình truyền nhiệt từ vật nóng sang vật lạnh."},

/* L19 — nước sôi */
{subject:"ly", q:"Khi nước SÔI ở 100°C (1 atm), tiếp tục đun nhưng nhiệt độ KHÔNG tăng. Năng lượng đó dùng để:",
 options:["Làm nước nguội","Chuyển nước từ thể lỏng sang thể hơi (nhiệt hóa hơi)","Phá vỡ phân tử","Tỏa nhiệt"], correct:1,
 explanation:"Tại điểm sôi, nhiệt cung cấp được dùng để biến nước lỏng → hơi (chuyển thể), không tăng T. Khi hết nước, nhiệt độ mới tăng tiếp."},
{subject:"ly", q:"Hiện tượng nước sôi giữ nhiệt độ ổn định là do năng lượng được dùng để:",
 options:["Chuyển động phân tử nhanh hơn","Phá vỡ liên kết phân tử để nước biến thành hơi","Tỏa ra môi trường","Nung nóng nồi"], correct:1,
 explanation:"Nhiệt hóa hơi: năng lượng dùng để tách phân tử nước (vốn liên kết hydrogen với nhau) thành hơi tự do, không làm tăng động năng phân tử."},

/* L20 — xoa hai tay */
{subject:"ly", q:"Khi xoa hai tay, tay nóng lên là do:",
 options:["Cơ thể tự sinh nhiệt","Lực ma sát giữa hai tay biến cơ năng thành nhiệt năng","Hơi thở ấm tay","Áp suất tăng"], correct:1,
 explanation:"Ma sát giữa các bề mặt da → công của lực ma sát chuyển thành nhiệt năng → nhiệt độ tay tăng."},
{subject:"ly", q:"Hiện tượng nào sau đây cũng giống cơ chế 'xoa tay làm nóng tay'?",
 options:["Đèn LED phát sáng","Phanh xe đạp lâu, vành xe nóng lên","Hoa nở vào sáng sớm","Nước đá tan"], correct:1,
 explanation:"Phanh xe = ma sát giữa má phanh và vành → cơ năng (chuyển động) → nhiệt năng → vành nóng. Cùng cơ chế ma sát-sinh-nhiệt."},

/* L21 — Archimedes formula */
{subject:"ly", q:"Công thức tính lực đẩy Archimedes là:",
 options:["F_A = m × g","F_A = d × V (d=trọng lượng riêng, V=thể tích vật ngập)","F_A = P × S","F_A = U × I"], correct:1,
 explanation:"Định luật Archimedes: F_A = d × V. d là trọng lượng riêng của chất lỏng (N/m³), V là thể tích phần vật chìm trong chất lỏng (m³). Đơn vị F_A: Newton."},
{subject:"ly", q:"Trong công thức F_A = d × V, ý nghĩa của V là:",
 options:["Tổng thể tích vật","Thể tích phần vật ngập trong chất lỏng","Thể tích toàn bộ chất lỏng","Vận tốc"], correct:1,
 explanation:"V chỉ tính phần vật CHÌM trong chất lỏng. Nếu vật nổi một phần, chỉ tính phần ngập. Đó là lý do tàu thiết kế rỗng để V_ngập lớn."},

/* L22 — vôn kế song song */
{subject:"ly", q:"Để đo hiệu điện thế giữa hai đầu bóng đèn, vôn kế phải mắc:",
 options:["Nối tiếp với đèn","Song song với đèn","Bất kỳ vị trí nào","Không cần mắc"], correct:1,
 explanation:"Vôn kế có điện trở RẤT LỚN → mắc song song với đoạn mạch cần đo. Nếu mắc nối tiếp sẽ chặn dòng điện."},
{subject:"ly", q:"Một học sinh muốn đo HĐT giữa 2 cực pin. Vôn kế nên mắc thế nào?",
 options:["Nối tiếp với pin","Mỗi đầu vôn kế nối với một cực pin (mắc song song)","Bỏ vào trong pin","Không cần mắc"], correct:1,
 explanation:"Hai đầu vôn kế (+, −) nối với hai cực pin tương ứng. Đây là cách mắc song song."},

/* L23 — đèn LED phát sáng */
{subject:"ly", q:"Đèn LED hoạt động dựa trên tác dụng nào của dòng điện?",
 options:["Tác dụng nhiệt","Tác dụng phát sáng","Tác dụng từ","Tác dụng sinh lý"], correct:1,
 explanation:"LED biến điện năng trực tiếp thành quang năng (không phải qua nhiệt như đèn dây tóc) → tác dụng phát sáng."},
{subject:"ly", q:"Vì sao đèn LED tiết kiệm điện hơn đèn dây tóc?",
 options:["Đèn LED rẻ hơn","Đèn LED biến điện trực tiếp → ánh sáng (ít hao phí thành nhiệt)","Đèn LED nhỏ hơn","Đèn LED không cần dây dẫn"], correct:1,
 explanation:"Đèn dây tóc làm nóng dây → phát sáng (rất hao điện vì phần lớn năng lượng → nhiệt). LED chuyển điện → ánh sáng trực tiếp, hiệu suất cao."},

/* L24 — nam châm điện */
{subject:"ly", q:"Nam châm điện, chuông điện, động cơ điện sử dụng tác dụng nào của dòng điện?",
 options:["Tác dụng nhiệt","Tác dụng phát sáng","Tác dụng từ","Tác dụng hóa học"], correct:2,
 explanation:"Khi có dòng điện qua dây dẫn, dây tạo ra TỪ TRƯỜNG. Quấn dây quanh lõi sắt → nam châm điện. Đây là tác dụng từ."},
{subject:"ly", q:"Một thanh sắt được quấn dây dẫn có dòng điện chạy qua sẽ:",
 options:["Bị nóng chảy","Trở thành nam châm (hút sắt khác)","Bị bay hơi","Không có gì xảy ra"], correct:1,
 explanation:"Đây là cấu tạo nam châm điện. Dòng điện qua cuộn dây tạo từ trường, làm lõi sắt từ hóa thành nam châm."},

/* L25 — tác dụng sinh lý */
{subject:"ly", q:"Khi dòng điện qua cơ thể người gây co giật cơ, tê, có thể tử vong. Đó là tác dụng:",
 options:["Tác dụng nhiệt","Tác dụng từ","Tác dụng SINH LÝ","Tác dụng hóa học"], correct:2,
 explanation:"Tác dụng sinh lý: dòng điện làm cơ co giật, tim rối loạn nhịp. Mặt tích cực: máy kích tim cứu người ngừng tim."},
{subject:"ly", q:"Khi bị điện giật nặng, cơ thể có thể ngừng tim do:",
 options:["Cơ thể quá nóng","Tác dụng sinh lý của dòng điện làm rối loạn hoạt động của tim","Mất máu","Thiếu oxy"], correct:1,
 explanation:"Dòng điện qua tim gây rối loạn nhịp tim → ngừng tim. Đó là lý do điện giật rất nguy hiểm và cần cấp cứu kịp thời."},

/* L26 — kí hiệu pin */
{subject:"ly", q:"Trong sơ đồ mạch điện, kí hiệu nào biểu thị PIN (nguồn DC)?",
 options:["Vòng tròn có chữ A","Hai vạch dài—ngắn song song —|⏐—","Vòng tròn có chữ V","Đường zigzag"], correct:1,
 explanation:"Pin: hai vạch song song, vạch DÀI = cực dương (+), vạch NGẮN = cực âm (−). Vòng tròn A = ampe kế, V = vôn kế."},
{subject:"ly", q:"Kí hiệu vòng tròn có chữ V bên trong biểu thị thiết bị nào?",
 options:["Bóng đèn","Pin","Vôn kế","Công tắc"], correct:2,
 explanation:"Vòng tròn (V) = vôn kế. Vòng tròn (A) = ampe kế. Bóng đèn là vòng tròn có dấu × bên trong. Công tắc là gạch nối có thể đóng/mở."},
{subject:"sinh", q:"Hệ sinh dục có chức năng chính là gì?",
 options:["Tiêu hóa thức ăn","Sản sinh giao tử (tinh trùng/trứng) và duy trì nòi giống","Bài tiết nước tiểu","Hô hấp"], correct:1,
 explanation:"Hệ sinh dục: sản xuất giao tử + tiết hormone sinh dục + duy trì nòi giống thông qua sinh sản."},
{subject:"sinh", q:"Vai trò của hệ sinh dục trong cơ thể KHÔNG bao gồm:",
 options:["Sản xuất tinh trùng/trứng","Tiết hormone sinh dục","Duy trì nòi giống","Vận chuyển oxygen"], correct:3,
 explanation:"Vận chuyển oxygen là chức năng của hệ tuần hoàn (máu). Hệ sinh dục không tham gia hô hấp."},

{subject:"sinh", q:"Cơ quan nào sau đây KHÔNG thuộc cơ quan sinh dục nam?",
 options:["Tinh hoàn","Ống dẫn tinh","Buồng trứng","Mào tinh"], correct:2,
 explanation:"Buồng trứng là của hệ sinh dục NỮ. Cơ quan sinh dục nam: tinh hoàn, mào tinh, ống dẫn tinh, dương vật, túi tinh, tuyến tiền liệt."},
{subject:"sinh", q:"Trong các cơ quan sau, cơ quan nào CHỈ có ở nam giới?",
 options:["Buồng trứng","Tử cung","Tinh hoàn","Vòi trứng"], correct:2,
 explanation:"Tinh hoàn chỉ có ở nam (sản xuất tinh trùng). Buồng trứng, tử cung, vòi trứng có ở nữ."},

{subject:"sinh", q:"Tinh hoàn có chức năng gì?",
 options:["Lọc máu","Sản xuất tinh trùng và testosterone","Tiêu hóa thức ăn","Hấp thụ oxygen"], correct:1,
 explanation:"Tinh hoàn vừa sản xuất tinh trùng vừa tiết hormone sinh dục nam testosterone (quan trọng cho đặc điểm sinh dục thứ cấp ở nam)."},
{subject:"sinh", q:"Hormone testosterone được tiết ra ở:",
 options:["Buồng trứng","Tinh hoàn","Tuyến tụy","Gan"], correct:1,
 explanation:"Tinh hoàn tiết testosterone — hormone sinh dục nam, gây ra các đặc điểm: cơ bắp, giọng nói trầm, lông mặt..."},

{subject:"sinh", q:"Buồng trứng có chức năng gì?",
 options:["Sản xuất tinh trùng","Sản xuất trứng và hormone estrogen, progesterone","Tiêu hóa","Co bóp nhau thai"], correct:1,
 explanation:"Buồng trứng sản xuất trứng (giao tử nữ) và tiết hormone estrogen, progesterone — quan trọng cho chu kỳ kinh nguyệt và thai kỳ."},
{subject:"sinh", q:"Hormone estrogen và progesterone được tiết ở:",
 options:["Buồng trứng","Tuyến giáp","Tử cung","Thận"], correct:0,
 explanation:"Buồng trứng vừa tạo trứng vừa tiết hai hormone sinh dục nữ: estrogen và progesterone."},

{subject:"sinh", q:"Sự thụ tinh ở người diễn ra ở vị trí nào?",
 options:["Tử cung","Buồng trứng","Ống dẫn trứng (vòi trứng)","Âm đạo"], correct:2,
 explanation:"Tinh trùng gặp trứng tại 1/3 ngoài của ống dẫn trứng (vòi trứng) → thụ tinh tạo hợp tử. Hợp tử di chuyển về tử cung làm tổ."},
{subject:"sinh", q:"Sau khi thụ tinh, hợp tử di chuyển về đâu để làm tổ?",
 options:["Buồng trứng","Tử cung","Âm đạo","Ống dẫn tinh"], correct:1,
 explanation:"Hợp tử di chuyển từ ống dẫn trứng về tử cung và làm tổ trong niêm mạc tử cung → phát triển thành thai nhi."},

{subject:"sinh", q:"Biện pháp tránh thai nào hiệu quả 100% và phù hợp nhất với tuổi vị thành niên?",
 options:["Kiêng quan hệ tình dục","Dùng thuốc khẩn cấp thường xuyên","Phá thai","Uống nước nhiều"], correct:0,
 explanation:"Kiêng quan hệ là biện pháp DUY NHẤT hiệu quả 100% và an toàn cho vị thành niên (cơ thể chưa phát triển đầy đủ, các biện pháp khác có tác dụng phụ)."},
{subject:"sinh", q:"Vì sao thuốc tránh thai khẩn cấp KHÔNG nên dùng thường xuyên?",
 options:["Vì đắt tiền","Vì có tác dụng phụ ảnh hưởng sức khỏe sinh sản, hormone","Vì chỉ dùng cho nam","Vì dễ mua"], correct:1,
 explanation:"Thuốc khẩn cấp chứa liều hormone cao, dùng nhiều gây rối loạn nội tiết, kinh nguyệt, tổn hại sức khỏe sinh sản về lâu dài."},

{subject:"sinh", q:"Bệnh nào sau đây CÓ thể lây qua đường tình dục?",
 options:["Cảm cúm","HIV/AIDS","Sởi","Lao phổi"], correct:1,
 explanation:"HIV/AIDS lây qua: máu, tình dục, mẹ–con. Cảm cúm/sởi/lao lây qua đường hô hấp (giọt bắn)."},
{subject:"sinh", q:"Cách phòng tránh bệnh lây qua đường tình dục bao gồm:",
 options:["Quan hệ với nhiều người","Lối sống lành mạnh, chung thủy, dùng biện pháp bảo vệ","Không tiêm phòng","Không khám sức khỏe"], correct:1,
 explanation:"Phòng tránh: lối sống lành mạnh, chung thủy 1 vợ–1 chồng, dùng bao cao su, khám sức khỏe định kỳ."},

{subject:"sinh", q:"Quần thể sinh vật là tập hợp các cá thể có đặc điểm gì?",
 options:["Khác loài, cùng nơi","Cùng loài + cùng nơi + cùng thời điểm + có khả năng giao phối","Một cá thể đơn lẻ","Cùng loài nhưng khác nhau hoàn toàn"], correct:1,
 explanation:"4 yếu tố cần thiết: cùng loài, cùng không gian, cùng thời điểm, có thể sinh sản với nhau. Ví dụ: đàn cá rô trong cùng một ao."},
{subject:"sinh", q:"Đâu là ví dụ về một quần thể sinh vật?",
 options:["Tất cả động vật trong rừng","Đàn voi sống cùng vùng rừng vào năm 2025","Con voi A và sư tử B","Cây cối và đất đá"], correct:1,
 explanation:"Quần thể = cùng loài (đàn voi), cùng nơi (vùng rừng), cùng thời điểm (năm 2025), giao phối được. Đáp án A là quần xã (nhiều loài); D là hệ sinh thái."},

{subject:"sinh", q:"Quần xã sinh vật KHÁC quần thể sinh vật ở chỗ:",
 options:["Quần xã chỉ có 1 loài","Quần xã gồm NHIỀU quần thể của các loài KHÁC NHAU cùng sống trong một sinh cảnh","Quần xã không có sinh vật","Quần xã không có sinh cảnh"], correct:1,
 explanation:"Quần thể = 1 loài. Quần xã = nhiều quần thể của các loài khác nhau, có quan hệ với nhau, cùng sinh cảnh."},
{subject:"sinh", q:"Một ruộng lúa với cây lúa, cá, ếch, sâu, vi khuẩn... cùng sống và tương tác — đó là:",
 options:["Một quần thể","Một quần xã sinh vật","Một cá thể","Một hệ sinh thái không có vô sinh"], correct:1,
 explanation:"Nhiều loài (lúa, cá, ếch, sâu, vi khuẩn) cùng sinh sống và tương tác → quần xã. Khi tính cả nước, đất, ánh sáng → trở thành hệ sinh thái."},

{subject:"sinh", q:"Đặc trưng nào KHÔNG phải của quần xã sinh vật?",
 options:["Số lượng loài","Loài ưu thế","Tốc độ ánh sáng","Loài đặc trưng"], correct:2,
 explanation:"Đặc trưng quần xã: số loài, độ đa dạng, loài ưu thế (số lượng nhiều), loài đặc trưng (chỉ có ở quần xã đó). Tốc độ ánh sáng là vật lý, không phải đặc trưng quần xã."},
{subject:"sinh", q:"Loài ƯU THẾ trong quần xã là loài:",
 options:["Có ít cá thể","Số lượng nhiều, vai trò quyết định","Đã tuyệt chủng","Không sinh sản"], correct:1,
 explanation:"Loài ưu thế: nhiều cá thể, sinh khối lớn, ảnh hưởng quyết định đến quần xã. Ví dụ: cây thông trong rừng thông."},

{subject:"sinh", q:"Hành động nào BẢO VỆ đa dạng sinh học?",
 options:["Săn bắt động vật quý","Phá rừng","Trồng và bảo vệ rừng, lập khu bảo tồn","Xả thải xuống sông"], correct:2,
 explanation:"Bảo vệ đa dạng = giữ gìn loài + sinh cảnh. Trồng rừng, lập khu bảo tồn là biện pháp cốt lõi."},
{subject:"sinh", q:"Vai trò của các khu bảo tồn thiên nhiên là:",
 options:["Nuôi thú cảnh","Bảo vệ các loài động thực vật quý hiếm và sinh cảnh tự nhiên","Khai thác gỗ","Trồng cây cảnh"], correct:1,
 explanation:"Khu bảo tồn (vườn quốc gia, khu dự trữ sinh quyển) bảo vệ các loài quý hiếm và hệ sinh thái khỏi tác động xấu của con người."},

{subject:"sinh", q:"Hành động nào sau đây PHÁ HOẠI đa dạng sinh học?",
 options:["Lập khu bảo tồn","Tái chế rác","Săn bắt động vật quý hiếm và phá rừng","Trồng cây gây rừng"], correct:2,
 explanation:"Săn bắt + phá rừng → giảm số loài và mất nơi sống → đa dạng giảm, nhiều loài có nguy cơ tuyệt chủng."},
{subject:"sinh", q:"Tê giác Java tại Việt Nam đã tuyệt chủng (2010) chủ yếu do:",
 options:["Bệnh dịch","Săn bắt và mất nơi sống do phá rừng","Biến đổi khí hậu","Thiếu nước"], correct:1,
 explanation:"Tê giác bị săn bắt lấy sừng (vốn được cho là chữa bệnh) + rừng bị phá → mất nơi sống → tuyệt chủng. Đây là bài học đau đớn về bảo tồn."},

{subject:"sinh", q:"Hệ sinh thái bao gồm những thành phần nào?",
 options:["Chỉ động vật","Chỉ thực vật","Quần xã + sinh cảnh + tương tác giữa chúng","Chỉ vô sinh"], correct:2,
 explanation:"Hệ sinh thái = quần xã (sinh vật) + sinh cảnh (vô sinh) + các tương tác (chuỗi thức ăn, chu trình vật chất, dòng năng lượng)."},
{subject:"sinh", q:"Trong hệ sinh thái, các nhân tố vô sinh và hữu sinh có quan hệ với nhau như thế nào?",
 options:["Không liên quan","Chỉ vô sinh ảnh hưởng hữu sinh","Tương tác qua lại — sinh vật ảnh hưởng môi trường và ngược lại","Chỉ hữu sinh ảnh hưởng vô sinh"], correct:2,
 explanation:"Tương tác hai chiều: sinh vật cần ánh sáng/nước (nhận từ vô sinh); sinh vật phân giải xác → trả vô sinh chất khoáng. Cây quang hợp giảm CO₂, tạo O₂…"},

{subject:"sinh", q:"Hệ sinh thái nào sau đây thuộc nước ngọt?",
 options:["Rừng nhiệt đới","Sa mạc","Ao hồ, sông suối","Biển sâu"], correct:2,
 explanation:"Phân loại: nước ngọt = ao, hồ, sông, suối; nước mặn = biển; trên cạn = rừng, sa mạc, đồng cỏ."},
{subject:"sinh", q:"Hệ sinh thái nào sau đây thuộc TRÊN CẠN?",
 options:["Ao hồ","Rừng nhiệt đới, sa mạc, đồng cỏ","Biển sâu","Sông suối"], correct:1,
 explanation:"Trên cạn: rừng (nhiệt đới, ôn đới), thảo nguyên, sa mạc, đồng cỏ. Còn ao hồ là nước ngọt; biển là nước mặn."},

{subject:"sinh", q:"Trong chuỗi thức ăn Cỏ → Châu chấu → Ếch → Rắn → Đại bàng, sinh vật tiêu thụ bậc 1 là:",
 options:["Cỏ","Châu chấu","Ếch","Đại bàng"], correct:1,
 explanation:"Bậc 1 = ăn trực tiếp sinh vật sản xuất (cỏ). Châu chấu ăn cỏ → bậc 1. Ếch ăn châu chấu → bậc 2. Rắn ăn ếch → bậc 3."},
{subject:"sinh", q:"Trong chuỗi Lúa → Sâu → Chim → Diều hâu, ai là sinh vật tiêu thụ bậc 3?",
 options:["Lúa","Sâu","Chim","Diều hâu"], correct:3,
 explanation:"Bậc 1 = sâu (ăn lúa); bậc 2 = chim (ăn sâu); bậc 3 = diều hâu (ăn chim). Diều hâu là top consumer trong chuỗi này."},

{subject:"sinh", q:"Lưới thức ăn khác chuỗi thức ăn ở chỗ nào?",
 options:["Lưới chỉ có 1 sinh vật","Lưới gồm nhiều chuỗi thức ăn ĐAN XEN nhau","Lưới không có động vật","Chuỗi phức tạp hơn lưới"], correct:1,
 explanation:"Trong tự nhiên, 1 loài có thể ăn nhiều loài và bị nhiều loài ăn → các chuỗi đan xen → tạo lưới thức ăn phức tạp hơn."},
{subject:"sinh", q:"Vì sao lưới thức ăn phản ánh tự nhiên hơn chuỗi thức ăn đơn giản?",
 options:["Lưới có nhiều màu sắc","Vì 1 loài thường có nhiều con mồi và nhiều kẻ săn → các mối quan hệ đan xen","Vì lưới đơn giản hơn","Lưới không cần năng lượng"], correct:1,
 explanation:"Trong tự nhiên: cú ăn chuột, thỏ, sóc... nhiều con mồi. Cú lại bị diều hâu ăn... → quan hệ phức tạp = lưới."},

{subject:"sinh", q:"Sinh vật sản xuất trong hệ sinh thái có đặc điểm gì?",
 options:["Ăn các sinh vật khác","TỰ DƯỠNG — tự tổng hợp chất hữu cơ qua quang hợp/hóa hợp (thực vật, tảo)","Phân hủy xác sinh vật","Săn bắt động vật"], correct:1,
 explanation:"Sinh vật sản xuất tự tạo chất hữu cơ từ vô cơ qua quang hợp (cây xanh, tảo) hoặc hóa hợp (vi khuẩn). Là nền tảng chuỗi thức ăn."},
{subject:"sinh", q:"Cây xanh là sinh vật sản xuất vì:",
 options:["Sống trên cạn","Có thể tổng hợp chất hữu cơ từ CO₂ và H₂O nhờ ánh sáng (quang hợp)","Có lá","Không di chuyển"], correct:1,
 explanation:"Quang hợp: 6CO₂ + 6H₂O →(ánh sáng, diệp lục) C₆H₁₂O₆ + 6O₂. Cây xanh tự tổng hợp glucose → là sinh vật sản xuất."},

{subject:"sinh", q:"Sinh vật phân giải chủ yếu trong hệ sinh thái là:",
 options:["Cây xanh","Vi khuẩn và nấm","Động vật ăn thịt","Tảo"], correct:1,
 explanation:"Vi khuẩn + nấm phân hủy xác sinh vật, chất thải → trả các chất khoáng về môi trường. Vai trò không thể thiếu trong chu trình vật chất."},
{subject:"sinh", q:"Nếu không có sinh vật phân giải, hệ sinh thái sẽ:",
 options:["Tốt hơn","Tích tụ xác sinh vật, mất cân bằng vật chất, không có khoáng cho cây","Nhiều cá hơn","Không thay đổi"], correct:1,
 explanation:"Sinh vật phân giải đóng vai trò 'tái chế' tự nhiên. Nếu không có chúng, xác sinh vật chất chồng chất, các chất khoáng không quay lại đất → cây không có dinh dưỡng → cả hệ sinh thái sụp đổ."},

{subject:"sinh", q:"Tháp sinh thái có hình dạng:",
 options:["Hình tròn","Đáy rộng — đỉnh hẹp (tháp tiêu chuẩn)","Đáy hẹp — đỉnh rộng","Hình vuông"], correct:1,
 explanation:"Tháp sinh thái có đáy rộng (sinh vật sản xuất nhiều) thu hẹp dần lên đỉnh (top consumer ít). Lý do: năng lượng giảm dần ~10% giữa các bậc."},
{subject:"sinh", q:"Vì sao trong tháp sinh thái, năng lượng giảm dần khi đi lên các bậc cao hơn?",
 options:["Vì chỉ tập trung ở đáy","Phần lớn năng lượng bị tiêu hao qua hô hấp, hoạt động sống, nhiệt thải","Vì các bậc cao không cần năng lượng","Năng lượng tự sinh ra"], correct:1,
 explanation:"~90% năng lượng từ một bậc bị hao phí (hô hấp, vận động, nhiệt thải, không tiêu hóa được). Chỉ ~10% chuyển lên bậc trên → tháp thu hẹp dần."},

{subject:"sinh", q:"Khi một mắt xích trong chuỗi thức ăn (ví dụ ếch) tuyệt chủng, hậu quả là:",
 options:["Không ảnh hưởng","Mất cân bằng: bậc dưới (châu chấu) bùng nổ, bậc trên (rắn) thiếu thức ăn","Tăng đa dạng","Cây xanh chết"], correct:1,
 explanation:"Mỗi loài có vai trò trong cân bằng. Mất ếch → châu chấu không có kẻ kiểm soát → bùng phát; rắn mất thức ăn → suy giảm. Hiệu ứng dây chuyền."},
{subject:"sinh", q:"Tại sao bảo vệ một loài cũng quan trọng như bảo vệ cả hệ sinh thái?",
 options:["Một loài đẹp hơn cả hệ","Mỗi loài có vai trò trong chuỗi thức ăn, mất nó gây hiệu ứng dây chuyền","Loài quý hiếm có giá trị tiền","Vì luật pháp yêu cầu"], correct:1,
 explanation:"Mất một loài → các loài liên quan (con mồi, kẻ săn) bị ảnh hưởng → có thể làm sụp đổ cả hệ sinh thái. Đây là lý do cần bảo tồn từng loài."},

{subject:"sinh", q:"Tử cung ở nữ có chức năng:",
 options:["Sản xuất trứng","Nơi phôi làm tổ và phát triển thành thai","Tiết hormone insulin","Vận chuyển tinh trùng"], correct:1,
 explanation:"Tử cung là nơi phôi làm tổ trong niêm mạc và phát triển thành thai trong ~9 tháng. Trứng được sản xuất ở buồng trứng; thụ tinh xảy ra ở ống dẫn trứng."},
{subject:"sinh", q:"Trong quá trình thai phát triển, niêm mạc tử cung có vai trò:",
 options:["Tiêu hóa","Cung cấp dinh dưỡng và chỗ làm tổ cho phôi","Sản xuất hormone testosterone","Bài tiết"], correct:1,
 explanation:"Niêm mạc tử cung dày lên hàng tháng để chuẩn bị cho phôi làm tổ. Khi có thai, niêm mạc tiếp tục dày, mạch máu nhiều → cung cấp dinh dưỡng cho thai."},
{subject:"sinh", q:"Trong quần xã rừng thông, loài ưu thế là loài:",
 options:["Cây thông (số lượng nhiều, sinh khối lớn)","Sóc","Chim","Vi khuẩn đất"], correct:0,
 explanation:"Cây thông chiếm số lượng và sinh khối lớn nhất, quyết định đặc điểm của quần xã rừng thông → loài ưu thế."},
{subject:"sinh", q:"Phân biệt loài ưu thế và loài đặc trưng:",
 options:["Cùng một khái niệm","Loài ưu thế = số lượng nhiều; loài đặc trưng = chỉ có ở quần xã đó","Loài ưu thế ăn loài đặc trưng","Loài đặc trưng ăn loài ưu thế"], correct:1,
 explanation:"Loài ưu thế: nhiều cá thể, vai trò quyết định. Loài đặc trưng: chỉ có (hoặc nhiều hơn hẳn) ở quần xã đó, dùng để nhận diện."},
{subject:"sinh", q:"Trong các hệ sinh thái sau, hệ sinh thái nào thuộc TRÊN CẠN?",
 options:["Ao nuôi cá","Sông suối","Rừng nhiệt đới Amazon","Biển sâu Mariana"], correct:2,
 explanation:"Trên cạn: rừng (nhiệt đới, ôn đới), thảo nguyên, sa mạc, đồng cỏ. Ao/sông là nước ngọt; biển là nước mặn."},
{subject:"sinh", q:"Đâu là MỘT ví dụ về hệ sinh thái nhân tạo?",
 options:["Rừng nguyên sinh","Đồng ruộng lúa, hồ nuôi cá","Hoang mạc","Biển sâu"], correct:1,
 explanation:"Hệ sinh thái nhân tạo do con người tạo ra: ruộng lúa, hồ nuôi cá, vườn cây ăn quả, công viên... Đặc điểm: con người duy trì, thường ít đa dạng hơn tự nhiên."}
];

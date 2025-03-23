import PropTypes from "prop-types";
import scale_gavel_2 from "../assets/ScaleAndGavel-2.jpg";
import double_quotes from "../assets/DoubleQuotes.png";
import lady_holding_scale from "../assets/LadyHoldScale.jpg";

const heroChildren = (
  <>
    <p className="hero__title">Giải quyết trực tiếp vấn đề của bạn</p>
    <div className="hero__item">
      <p className="hero__detail">
        Chúng tôi cung cấp cho bạn dịch vụ chăm sóc pháp lý trực tiếp và chuyên
        nghiệp để bạn có thể giải quyết vấn đề sớm và thân thiện.
      </p>
      <a href="#section-services" className="hero__link button">
        xem dịch vụ
      </a>
    </div>
  </>
);

const reasonsChildren = (
  <>
    <div className="reasons__item">
      <h2 className="reasons__title">
        Chúng tôi biết ly hôn là điều khó khăn.
      </h2>
      <p className="reasons__detail">
        Chúng tôi làm việc chặt chẽ với khách hàng trong mọi giai đoạn của một
        thử thách lâu dài và khó khăn để họ có thể đạt được mục tiêu và mong
        muốn của mình. Với kinh nghiệm hợp tác trong quá trình xử lý các vụ kiện
        và kiện tụng phức tạp trong hơn 30 năm, bạn có thể tin tưởng chúng tôi
        sẽ thẳng thắn và nỗ lực đáp ứng nhu cầu của bạn.
      </p>
      <a href="#footer" className="reasons__link button">
        liên hệ
      </a>
    </div>
    <img
      className="reasons__image"
      src={lady_holding_scale}
      alt="Lady holding a scale"
    />
  </>
);

const objectivesChildren = (
  <>
    <h2 className="objectives__title">Trọng tâm của chúng tôi</h2>
    <div className="objectives__details">
      <div className="objectives__item">
        <h2 className="objectives__item-title">Quyền nuôi con</h2>
        <p className="objectives__item-detail">
          Dịch vụ của bạn có gì đặc biệt? Hãy cho khán giả của bạn một lý do để
          chọn bạn thay vì chọn đối thủ cạnh tranh của bạn. Trích dẫn ở trên,
          sau đó chia sẻ ở đây.
        </p>
      </div>
      <div className="objectives__item">
        <h2 className="objectives__item-title">Ly hôn</h2>
        <p className="objectives__item-detail">
          Dịch vụ của bạn có gì đặc biệt? Hãy cho khán giả của bạn một lý do để
          chọn bạn thay vì chọn đối thủ cạnh tranh của bạn. Trích dẫn ở trên,
          sau đó chia sẻ ở đây.
        </p>
      </div>
      <div className="objectives__item">
        <h2 className="objectives__item-title">Tranh tụng phức tạp</h2>
        <p className="objectives__item-detail">
          Dịch vụ của bạn có gì đặc biệt? Hãy cho khán giả của bạn một lý do để
          chọn bạn thay vì chọn đối thủ cạnh tranh của bạn. Trích dẫn ở trên,
          sau đó chia sẻ ở đây.
        </p>
      </div>
      <img
        className="objectives__details-image"
        src={scale_gavel_2}
        alt="Scale and Gavel"
      />
    </div>
  </>
);

const servicesChildren = (
  <>
    <div className="services__image"></div>
    <div className="services__detail">
      <h2 className="services__title">Dịch vụ chính của chúng tôi</h2>
      <div className="services__item">
        <p className="services__paragraph">
          Chia sẻ dịch vụ hoặc chuyên ngành của bạn ở đây, sau đó liệt kê dưới
          dạng gạch đầu dòng để dễ đọc trên thiết bị di động.
        </p>
        <ul className="services__list">
          <li className="services__list-item">
            Thêm bao nhiêu gạch đầu dòng tùy thích
          </li>
          <li className="services__list-item">
            Thêm bao nhiêu gạch đầu dòng tùy thích
          </li>
          <li className="services__list-item">
            Thêm bao nhiêu gạch đầu dòng tùy thích
          </li>
          <li className="services__list-item">
            Thêm bao nhiêu gạch đầu dòng tùy thích
          </li>
          <li className="services__list-item">
            Thêm bao nhiêu gạch đầu dòng tùy thích
          </li>
        </ul>
      </div>
    </div>
  </>
);

const testimonialChildren = (
  <>
    <h2 className="testimonial__title">Lời chứng thực từ khách hàng</h2>
    <h3 className="testimonial__subtitle">
      Một cái nhìn trung thực về cách chúng tôi làm việc
    </h3>

    <div className="testimonial__list">
      <div className="testimonial__item">
        <img
          className="testimonial__item-image"
          src={double_quotes}
          alt="Double quotes"
        />
        <p className="testimonial__detail">
          Thúc đẩy độ đáng tin cậy của sản phẩm và dịch vụ của bạn bằng cách
          thêm lời chứng thực từ các khách hàng. Mọi người thích được giới thiệu
          nên phản hồi từ những người đã từng sử dụng sẽ rất quý giá.
        </p>
        <p className="testimonial__user">Phan Ngọc Mai</p>
      </div>
      <div className="testimonial__item">
        <img
          className="testimonial__item-image"
          src={double_quotes}
          alt="Double quotes"
        />
        <p className="testimonial__detail">
          Thúc đẩy độ đáng tin cậy của sản phẩm và dịch vụ của bạn bằng cách
          thêm lời chứng thực từ các khách hàng. Mọi người thích được giới thiệu
          nên phản hồi từ những người đã từng sử dụng sẽ rất quý giá.
        </p>
        <p className="testimonial__user">Trần Ngọc Anh</p>
      </div>
      <div className="testimonial__item">
        <img
          className="testimonial__item-image"
          src={double_quotes}
          alt="Double quotes"
        />
        <p className="testimonial__detail">
          Thúc đẩy độ đáng tin cậy của sản phẩm và dịch vụ của bạn bằng cách
          thêm lời chứng thực từ các khách hàng. Mọi người thích được giới thiệu
          nên phản hồi từ những người đã từng sử dụng sẽ rất quý giá.
        </p>
        <p className="testimonial__user">Trần Mai Lan</p>
      </div>
    </div>
  </>
);

const childrenDict = {
  hero: heroChildren,
  reasons: reasonsChildren,
  objectives: objectivesChildren,
  services: servicesChildren,
  testimonial: testimonialChildren,
};

export default function BaseSection(props) {
  return (
    <section id={`section-${props.className}`} className={props.className}>
      {childrenDict[props.className]}
    </section>
  );
}

BaseSection.propTypes = {
  className: PropTypes.string.isRequired,
};

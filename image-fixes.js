(() => {
  'use strict';

  const fixes = {
    current: [
      {
        src: 'https://c.imgz.jp/228/71141228/71141228b_14_d_500.jpg',
        alt: '現在使用中のOPAQUE.CLIP黒トート 商品単品'
      },
      {
        src: 'https://c.imgz.jp/228/71141228/71141228_10011_d_500.jpg',
        alt: '現在使用中のOPAQUE.CLIP黒トート 着用イメージ'
      }
    ],
    russet: [
      {
        src: 'https://contents.palcloset.jp/static/images/item/570338_2500844_2.jpg',
        alt: 'russet CE-1404-WEB ライトグレー Gray 商品単品'
      },
      {
        src: 'https://contents.palcloset.jp/static/images/item/570338_2500844_19.jpg',
        alt: 'russet CE-1404-WEB ライトグレー Gray 着用イメージ'
      }
    ]
  };

  function applyGalleryFix(productId, images) {
    const card = document.querySelector(`.product-card[data-product="${productId}"]`);
    if (!card) return;

    const media = card.querySelector('.product-media');
    const mainImg = card.querySelector('.product-main-image');
    if (!media || !mainImg) return;

    const setMain = (image) => {
      media.classList.remove('is-error');
      mainImg.src = image.src;
      mainImg.alt = image.alt;
    };

    setMain(images[0]);

    let rail = card.querySelector('.thumb-rail');
    if (!rail) {
      rail = document.createElement('div');
      rail.className = 'thumb-rail';
      rail.setAttribute('aria-label', '画像を切り替える');
      media.insertAdjacentElement('afterend', rail);
    }

    rail.replaceChildren();

    images.forEach((image, index) => {
      const thumb = document.createElement('button');
      thumb.className = 'thumb';
      thumb.type = 'button';
      thumb.setAttribute('aria-label', `${image.alt} ${index + 1}枚目`);
      thumb.setAttribute('aria-current', index === 0 ? 'true' : 'false');

      const img = document.createElement('img');
      img.src = image.src;
      img.alt = '';
      img.loading = 'lazy';
      img.referrerPolicy = 'no-referrer';
      thumb.appendChild(img);

      thumb.addEventListener('click', () => {
        setMain(image);
        rail.querySelectorAll('.thumb').forEach((item) => {
          item.setAttribute('aria-current', item === thumb ? 'true' : 'false');
        });
      });

      rail.appendChild(thumb);
    });
  }

  applyGalleryFix('current', fixes.current);
  applyGalleryFix('russet', fixes.russet);
})();

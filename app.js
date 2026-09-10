(() => {
  'use strict';

  const FIXED_LOAD_G = 2147;
  const CURRENT_BAG_G = 490;
  const CURRENT_TOTAL_G = FIXED_LOAD_G + CURRENT_BAG_G;

  const urls = {
    current: 'https://wear.jp/item/66617652/',
    honeys: 'https://www.honeys-onlineshop.com/shop/g/g277121856193/',
    hycoWoven: 'https://coteetciel.jp/products/hyco-s-woven-concrete',
    hycoCargo: 'https://coteetciel.jp/products/hyco-s-cargo-green',
    hycoKomatsu: 'https://coteetciel.jp/products/hyco-s-komatsu-beige',
    longPebble: 'https://www.longchamp.com/jp/ja/products/%E3%82%B7%E3%83%A7%E3%83%AB%E3%83%80%E3%83%BC%E3%83%90%E3%83%83%E3%82%B0-l-L1899089349.html',
    longNavy: 'https://www.longchamp.com/jp/ja/products/%E3%82%B7%E3%83%A7%E3%83%AB%E3%83%80%E3%83%BC%E3%83%90%E3%83%83%E3%82%B0-l-L1899089P68.html',
    longMocha: 'https://www.longchamp.com/jp/ja/products/%E3%82%B7%E3%83%A7%E3%83%AB%E3%83%80%E3%83%BC%E3%83%90%E3%83%83%E3%82%B0-l-L1899089002.html',
    herve: 'https://store.hervechapelierjapon.com/products/1028n',
    todd: 'https://coteetciel.jp/products/todd-satellite-black',
    russet: 'https://crosset.onward.co.jp/items/310_RUZ1042121A0013'
  };

  const products = [
    {
      id: 'current', group: '現在使用中', brand: 'OPAQUE.CLIP', title: '9ポケット トートバッグ',
      carry: '肩掛けで評価', good: '使い慣れた容量と15cmのマチ。弁当を立てて収めやすい。',
      concern: '単体490g。持ち手表面に経年劣化が出ている。',
      variants: [{
        name: 'Black', weight: 490, factor: 1.00, factorLabel: '通常の2本ハンドルを基準の1.00に設定。', url: urls.current,
        images: [
          ['https://c.imgz.jp/228/71141228/71141228b_8_d_500.jpg', '肩掛けした現在使用中のOPAQUE.CLIP黒トート'],
          ['https://c.imgz.jp/228/71141228/71141228_10011_d_500.jpg', 'OPAQUE.CLIP黒トートの着用イメージ']
        ]
      }]
    },
    {
      id: 'honeys', group: '候補', brand: 'GLACIER / Honeys', title: '軽量A4トート',
      carry: '肩掛けで評価', good: 'きれいめな通勤スタイルに合わせやすく、開口部も大きい。',
      concern: '単体約600gで、現在使用中より110g重い。総重量の軽量化にはならない。',
      variants: [{
        name: 'Black', weight: 600, factor: 1.00, factorLabel: '現在品と同じ通常の2本ハンドルとして1.00。', url: urls.honeys,
        images: [
          ['https://www.honeys-onlineshop.com/img/goods/2771218561/2771218561_3.jpg', 'Honeys 軽量A4トート ブラック']
        ]
      }]
    },
    {
      id: 'hyco', group: '比較候補', brand: 'côte&ciel', title: 'HYCO S',
      carry: '斜め掛けで評価', good: '幅広ストラップで身体のラインに沿う設計。総重量が増えても体感負荷を下げやすい。',
      concern: '柔らかい構造なので、弁当を立てたときの安定性は荷物配置の確認がおすすめ。',
      variants: [
        {
          name: 'Woven Concrete', weight: 700, factor: .75, factorLabel: '身体密着型の幅広クロスボディとして0.75。', url: urls.hycoWoven,
          images: [
            ['https://coteetciel.jp/cdn/shop/files/29240_HYCO_S_WOVEN_CONCRETE_1_d1949ffc-b0af-4f0a-9a91-f8f55e2de02e_1500x.jpg?v=1769655038', 'HYCO S Woven Concrete 商品画像'],
            ['https://coteetciel.jp/cdn/shop/files/model_29240_HYCO_S_WOVEN_CONCRETE_2_96d99068-a299-46dd-b88c-88687eb07cf0_1500x.jpg?v=1769655038', 'HYCO S Woven Concrete 着用イメージ']
          ]
        },
        {
          name: 'Cargo Green', weight: 660, factor: .75, factorLabel: '身体密着型の幅広クロスボディとして0.75。', url: urls.hycoCargo,
          images: [
            ['https://coteetciel.jp/cdn/shop/files/29203_HYCOS_CARGO_GREEN_1_e05c3077-52d9-4488-a8d1-a978a24d1f11_1500x.jpg?v=1765276582', 'HYCO S Cargo Green 商品画像'],
            ['https://coteetciel.jp/cdn/shop/files/29203_HYCO_S_CARGO_KHAKI_1_3fe47b4b-24c5-466a-9fc1-8c1fff92fea7_1500x.jpg?v=1765276582', 'HYCO S Cargo Green 着用イメージ']
          ]
        },
        {
          name: 'KOMATSU BEIGE', weight: 490, factor: .75, factorLabel: '身体密着型の幅広クロスボディとして0.75。', url: urls.hycoKomatsu,
          images: [
            ['https://coteetciel.jp/cdn/shop/files/29117_HYCO_S_KOMATSU_BEIGE_1_f83e62f9-ca73-40bf-86d4-1a171f768dcb_1500x.jpg?v=1765276267', 'HYCO S KOMATSU BEIGE 商品画像'],
            ['https://coteetciel.jp/cdn/shop/files/cote_ciel_e-commerce_PP_2_b16a9fa4-faf0-46ef-b050-3c15f5a3af41_1500x.jpg?v=1765276267', 'HYCO S KOMATSU BEIGE 着用イメージ']
          ]
        }
      ]
    },
    {
      id: 'longchamp', group: '比較候補', brand: 'Longchamp', title: 'ル プリアージュ® オリジナル L',
      carry: '肩掛けで評価', good: '単体346gで現在より144g軽量。きれいめな通勤服にも合わせやすい。',
      concern: '細めの2本レザーハンドルなので、荷物が重い日は肩への圧が集中しやすい。',
      variants: [
        {
          name: 'ぺブル', weight: 346, factor: 1.00, factorLabel: '通常の2本ハンドルとして1.00。', url: urls.longPebble,
          images: [['https://www.longchamp.com/dw/image/v2/BCVX_PRD/on/demandware.static/-/Sites-LC-master-catalog/default/dw0dffa6fd/images/DIS/L1899089349_0.png?sh=800&sm=fit&sw=800', 'Longchamp ル プリアージュ オリジナル L ぺブル']]
        },
        {
          name: 'ネイビー', weight: 346, factor: 1.00, factorLabel: '通常の2本ハンドルとして1.00。', url: urls.longNavy,
          images: [['https://www.longchamp.com/dw/image/v2/BCVX_PRD/on/demandware.static/-/Sites-LC-master-catalog/default/dwbefc8bca/images/DIS/L1899089P68_0.png?sh=800&sm=fit&sw=800', 'Longchamp ル プリアージュ オリジナル L ネイビー']]
        },
        {
          name: 'モカ', weight: 346, factor: 1.00, factorLabel: '通常の2本ハンドルとして1.00。', url: urls.longMocha,
          images: [['https://www.longchamp.com/dw/image/v2/BCVX_PRD/on/demandware.static/-/Sites-LC-master-catalog/default/dwd0ff5ac5/images/DIS/L1899089002_0.png?sh=800&sm=fit&sw=800', 'Longchamp ル プリアージュ オリジナル L モカ']]
        }
      ]
    },
    {
      id: 'herve', group: '比較候補', brand: 'Hervé Chapelier', title: '1028N ナイロン舟型ショルダー ML',
      carry: '肩掛けで評価', good: '約270gと今回の中で最軽量クラス。幅のあるテープハンドルで肩掛けしやすい。',
      concern: '柔らかい舟型のため、弁当の安定は荷物の置き方次第。単体重量は公式非掲載のため販売店実測値。',
      variants: [{
        name: 'Noir × Noir', weight: 270, factor: .94, factorLabel: '幅のあるテープ式2本ハンドルとして0.94。', url: urls.herve, approximateWeight: true,
        images: [['https://hervechapelierjapon.com/img/zoom/1028n/1028n0909-l.jpg', 'Hervé Chapelier 1028N Noir Noir']]
      }]
    },
    {
      id: 'todd', group: '比較候補', brand: 'côte&ciel', title: 'Todd Satellite Black',
      carry: '肩掛けで評価', good: '430gで現在より60g軽量。ミニマルな見た目と17Lの容量を両立。',
      concern: '肩掛け主体では、HYCO Sのような身体密着型クロスボディほど荷重分散は期待しにくい。',
      variants: [{
        name: 'Satellite Black', weight: 430, factor: .97, factorLabel: '比較的幅のあるソフトな肩掛けトートとして0.97。', url: urls.todd,
        images: [
          ['https://coteetciel.jp/cdn/shop/files/29249_TODD_SATELLITE_BLACK_1_c1965ac3-ecfb-47bc-b9c7-47c7701cb9e1_1500x.jpg?v=1769655049', 'Todd Satellite Black 商品画像'],
          ['https://coteetciel.jp/cdn/shop/files/model_29249_TODD_SATELLITE_BLACK_2_a39fef81-d010-45dd-9d43-8716aab97dfc_1500x.jpg?v=1769655049', 'Todd Satellite Black 着用イメージ']
        ]
      }]
    },
    {
      id: 'russet', group: '比較候補', brand: 'russet', title: 'スリム2WAYトートバッグ CE-1404-WEB',
      carry: '斜め掛けで評価', good: '単体320gで、長さ調整できるショルダー付き。斜め掛けなら負荷を分散しやすい。',
      concern: '縦長でマチ薄のデザイン。弁当を立てた状態の安定感は実物で確認したい。',
      variants: [{
        name: 'Gray', weight: 320, factor: .83, factorLabel: '斜め掛けできる幅広ショルダーベルトとして0.83。', url: urls.russet,
        images: [
          ['https://crosset.onward.co.jp/img01/w_280.h_280/trim_ofcrs_itemd82df89020c711f08cf40242ac11000c.jpg?ts=202504240451', 'russet CE-1404-WEB Gray 商品画像']
        ]
      }]
    }
  ];

  const formatWeight = (g, approximate = false) => `${approximate ? '約' : ''}${g.toLocaleString('ja-JP')}g`;
  const totalWeight = (g) => FIXED_LOAD_G + g;
  const loadIndex = (g, factor) => Math.round((totalWeight(g) / CURRENT_TOTAL_G) * factor * 100);
  const diffText = (g) => {
    const diff = g - CURRENT_BAG_G;
    if (diff === 0) return '現在と同じ';
    return `現在より ${diff > 0 ? '+' : '−'}${Math.abs(diff)}g`;
  };
  const totalKg = (g) => (totalWeight(g) / 1000).toFixed(2) + 'kg';

  function flattenImages(product) {
    return product.variants.flatMap((variant, variantIndex) =>
      variant.images.map(([src, alt], imageIndex) => ({ src, alt, variantIndex, imageIndex }))
    );
  }

  function renderCatalog() {
    const root = document.getElementById('catalog');
    let lastGroup = '';

    products.forEach((product) => {
      if (product.group !== lastGroup) {
        const heading = document.createElement('div');
        heading.className = 'group-heading';
        heading.innerHTML = `<span>${product.group}</span>`;
        root.appendChild(heading);
        lastGroup = product.group;
      }

      const card = document.createElement('article');
      card.className = 'product-card';
      card.dataset.product = product.id;
      const first = product.variants[0];
      const firstImage = first.images[0];
      const images = flattenImages(product);

      card.innerHTML = `
        <div class="product-media">
          <button class="product-main-button" type="button" aria-label="画像を拡大表示">
            <img class="product-main-image" src="${firstImage[0]}" alt="${firstImage[1]}" referrerpolicy="no-referrer" ${product.id === 'current' ? 'fetchpriority="high"' : 'loading="lazy"'}>
          </button>
          <div class="image-fallback">画像を表示できません。<br>「商品を見る」から公式ページで確認できます。</div>
        </div>
        ${images.length > 1 ? `<div class="thumb-rail" aria-label="画像を切り替える"></div>` : ''}
        <div class="product-body">
          <p class="product-kicker">${product.brand}</p>
          <h3 class="product-title">${product.title}</h3>
          <p class="variant-name">${first.name}</p>
          <div class="metric-grid">
            <div class="metric">
              <strong class="metric-value metric-bag">${formatWeight(first.weight, first.approximateWeight)}</strong>
              <span class="metric-label">単体重量</span>
            </div>
            <div class="metric">
              <strong class="metric-value metric-total">${totalKg(first.weight)}</strong>
              <span class="metric-label">推定通勤総重量</span>
              <span class="metric-sub metric-diff">${diffText(first.weight)}</span>
            </div>
            <div class="metric">
              <strong class="metric-value metric-load">${loadIndex(first.weight, first.factor)}</strong>
              <span class="metric-label">推定体感負荷</span>
              <span class="metric-sub">現行＝100</span>
            </div>
          </div>
          <div class="carry-row">
            <span class="carry-badge">${product.carry}</span>
            <span class="diff metric-diff-inline">${diffText(first.weight)}</span>
          </div>
          <details class="load-details">
            <summary>体感負荷 ${loadIndex(first.weight, first.factor)} の根拠</summary>
            <div class="load-detail-body">
              <p class="factor-explain">${first.factorLabel}</p>
              <span class="load-factor">携行構造係数 ${first.factor.toFixed(2)}</span>
            </div>
          </details>
          <div class="pros-cons">
            <div class="note-row good"><span class="note-label">良い点</span><p>${product.good}</p></div>
            <div class="note-row concern"><span class="note-label">気になる点</span><p>${product.concern}</p></div>
          </div>
          <a class="product-link" href="${first.url}" target="_blank" rel="noopener noreferrer">商品を見る</a>
        </div>`;

      const mainImg = card.querySelector('.product-main-image');
      const media = card.querySelector('.product-media');
      mainImg.addEventListener('error', () => media.classList.add('is-error'));
      mainImg.addEventListener('load', () => media.classList.remove('is-error'));

      const thumbRail = card.querySelector('.thumb-rail');
      if (thumbRail) {
        images.forEach((item, index) => {
          const thumb = document.createElement('button');
          thumb.className = 'thumb';
          thumb.type = 'button';
          thumb.setAttribute('aria-label', `${product.variants[item.variantIndex].name} ${item.imageIndex + 1}枚目`);
          thumb.setAttribute('aria-current', index === 0 ? 'true' : 'false');
          thumb.innerHTML = `<img src="${item.src}" alt="" loading="lazy" referrerpolicy="no-referrer">`;
          thumb.addEventListener('click', () => switchImage(card, product, item, thumb));
          thumbRail.appendChild(thumb);
        });
      }

      card.querySelector('.product-main-button').addEventListener('click', () => openLightbox(mainImg.src, mainImg.alt));
      root.appendChild(card);
    });
  }

  function switchImage(card, product, item, clickedThumb) {
    const variant = product.variants[item.variantIndex];
    const mainImg = card.querySelector('.product-main-image');
    const media = card.querySelector('.product-media');
    media.classList.remove('is-error');
    mainImg.style.opacity = '0';
    window.setTimeout(() => {
      mainImg.src = item.src;
      mainImg.alt = item.alt;
      mainImg.style.opacity = '1';
    }, 70);

    card.querySelectorAll('.thumb').forEach((t) => t.setAttribute('aria-current', t === clickedThumb ? 'true' : 'false'));
    card.querySelector('.variant-name').textContent = variant.name;
    card.querySelector('.metric-bag').textContent = formatWeight(variant.weight, variant.approximateWeight);
    card.querySelector('.metric-total').textContent = totalKg(variant.weight);
    card.querySelector('.metric-diff').textContent = diffText(variant.weight);
    card.querySelector('.metric-diff-inline').textContent = diffText(variant.weight);
    const index = loadIndex(variant.weight, variant.factor);
    card.querySelector('.metric-load').textContent = index;
    card.querySelector('.load-details summary').textContent = `体感負荷 ${index} の根拠`;
    card.querySelector('.factor-explain').textContent = variant.factorLabel;
    card.querySelector('.load-factor').textContent = `携行構造係数 ${variant.factor.toFixed(2)}`;
    card.querySelector('.product-link').href = variant.url;
  }

  function chartItems() {
    const rows = [];
    products.forEach((p) => {
      p.variants.forEach((v, i) => {
        if (p.id === 'longchamp' && i > 0) return;
        rows.push({
          label: p.id === 'hyco' ? `HYCO S / ${v.name}` : p.id === 'longchamp' ? 'Longchamp / ル プリアージュ L' : `${p.brand} / ${p.title}`,
          short: p.id === 'current' ? '現在使用中' : p.id === 'honeys' ? 'Honeys 軽量A4トート' : p.id === 'herve' ? 'Hervé 1028N' : p.id === 'todd' ? 'Todd Satellite' : p.id === 'russet' ? 'russet CE-1404' : undefined,
          load: loadIndex(v.weight, v.factor),
          total: totalWeight(v.weight),
          current: p.id === 'current'
        });
      });
    });
    return rows.sort((a, b) => a.load - b.load || a.total - b.total);
  }

  function renderCharts() {
    const items = chartItems();
    const loadRoot = document.getElementById('loadChart');
    const weightRoot = document.getElementById('weightChart');
    const maxLoad = Math.max(...items.map(x => x.load));
    const maxWeight = Math.max(...items.map(x => x.total));

    loadRoot.innerHTML = `<h3 class="chart-title">推定体感負荷</h3><p class="chart-caption">小さいほど、歩いたときに楽と推定</p>` +
      items.map(x => barRow(x, x.load, maxLoad, String(x.load), 'load')).join('');

    weightRoot.innerHTML = `<h3 class="chart-title">推定通勤総重量</h3><p class="chart-caption">同じ並び順で、実際の重さも確認</p>` +
      items.map(x => barRow(x, x.total, maxWeight, (x.total / 1000).toFixed(2) + 'kg', 'weight')).join('');

    requestAnimationFrame(() => document.querySelectorAll('.bar-fill').forEach((bar) => { bar.style.width = bar.dataset.width; }));
  }

  function barRow(item, value, max, valueText, type) {
    const width = Math.max(8, (value / max) * 100).toFixed(1) + '%';
    return `<div class="bar-row${item.current ? ' is-current' : ''}" data-kind="${type}">
      <div class="bar-meta"><span class="bar-label">${item.short || item.label}</span><strong class="bar-value">${valueText}</strong></div>
      <div class="bar-track"><div class="bar-fill" data-width="${width}"></div></div>
    </div>`;
  }

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImage');
  const stage = lightbox.querySelector('.lightbox-stage');
  let scale = 1, translateX = 0, translateY = 0, startDistance = 0, startScale = 1, startMid = null, startTranslate = null, lastTap = 0;
  const applyTransform = () => { lightboxImg.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`; };
  const resetTransform = () => { scale = 1; translateX = 0; translateY = 0; startDistance = 0; startMid = null; startTranslate = null; applyTransform(); };
  function openLightbox(src, alt) {
    lightboxImg.src = src; lightboxImg.alt = alt || '商品画像'; lightbox.hidden = false; document.body.classList.add('lightbox-open'); resetTransform();
    lightbox.querySelector('.lightbox-close').focus({ preventScroll: true });
  }
  function closeLightbox() { lightbox.hidden = true; document.body.classList.remove('lightbox-open'); lightboxImg.removeAttribute('src'); resetTransform(); }
  lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === stage && scale === 1) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lightbox.hidden) closeLightbox(); });

  const distance = (a, b) => Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
  const midpoint = (a, b) => ({ x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 });
  stage.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      e.preventDefault(); startDistance = distance(e.touches[0], e.touches[1]); startScale = scale; startMid = midpoint(e.touches[0], e.touches[1]); startTranslate = { x: translateX, y: translateY };
    } else if (e.touches.length === 1 && scale > 1) {
      startMid = { x: e.touches[0].clientX, y: e.touches[0].clientY }; startTranslate = { x: translateX, y: translateY };
    }
  }, { passive: false });
  stage.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2 && startDistance) {
      e.preventDefault();
      scale = Math.min(4, Math.max(1, startScale * (distance(e.touches[0], e.touches[1]) / startDistance)));
      const mid = midpoint(e.touches[0], e.touches[1]); translateX = startTranslate.x + (mid.x - startMid.x); translateY = startTranslate.y + (mid.y - startMid.y);
      if (scale === 1) { translateX = 0; translateY = 0; } applyTransform();
    } else if (e.touches.length === 1 && scale > 1 && startMid) {
      e.preventDefault(); translateX = startTranslate.x + (e.touches[0].clientX - startMid.x); translateY = startTranslate.y + (e.touches[0].clientY - startMid.y); applyTransform();
    }
  }, { passive: false });
  stage.addEventListener('touchend', (e) => { if (e.touches.length < 2) startDistance = 0; if (e.touches.length === 0) { startMid = null; startTranslate = null; } });
  stage.addEventListener('dblclick', () => { if (scale > 1) resetTransform(); else { scale = 2; applyTransform(); } });
  stage.addEventListener('touchend', (e) => {
    if (e.changedTouches.length !== 1 || e.touches.length !== 0) return;
    const now = Date.now();
    if (now - lastTap < 300) { e.preventDefault(); if (scale > 1) resetTransform(); else { scale = 2; applyTransform(); } lastTap = 0; } else lastTap = now;
  }, { passive: false });

  renderCatalog();
  renderCharts();
})();

const fs = require('fs');
const path = '/home/node/.openclaw/workspace-baidu-zhidao/pova8-dashboard-TH/index.html';
let html = fs.readFileSync(path, 'utf8');

// === 1. Header date ===
html = html.replace('数据更新至 8月24日', '数据更新至 8月31日');

// === 2. Alert banner ===
html = html.replace(
  'Google SOV 更新至 8月24日，TT VV SOV 更新至 8月18日，TT Search SOV 更新至 8月19日，消耗/曝光数据至 8月18日。',
  'Google SOV 更新至 8月31日，TT VV SOV 更新至 8月25日，TT Search SOV 更新至 8月26日，消耗数据至 8月30日。'
);

// === 3. Hero summary ===
html = html.replace(
  '曝光完成进度已达 158.77%，消耗进度 99.17%；TT总曝光 352.9M，DM总曝光 486.5M。兰博基尼 Remarketing 8/17 预热 → 8/21 上市，Google 品牌 SOV 回升至 7.00%，兰博基尼关键词搜索量 1,418，TT曝光 2.71M，Meta曝光 0.88M。',
  '曝光完成进度已达 158.77%，消耗进度 103.29%；TT总曝光 396.9M，DM总曝光 560.3M。兰博基尼 Remarketing 8/17 预热 → 8/21 上市，Google 品牌 SOV 回升至 7.64%，兰博基尼关键词搜索量 1,418，TT曝光 46.71M，Meta曝光 30.71M。'
);

// === 4. Hero stat cards ===
html = html.replace('<div class="hero-stat-value">产品 SOV 28.20%</div>', '<div class="hero-stat-value">产品 SOV 25.00%</div>');
html = html.replace('<div class="hero-stat-value">消耗进度 99.17%</div>', '<div class="hero-stat-value">消耗进度 103.29%</div>');
html = html.replace('<div class="hero-stat-value">2.71M</div>', '<div class="hero-stat-value">46.71M</div>');

// === 5. KPI cards - Google 品牌 SOV ===
html = html.replace(
  '<div class="value">7.00% <span class="trend-arrow trend-up">↑</span></div><div class="sub">当日实时 · 截至 8/28</div>',
  '<div class="value">7.64% <span class="trend-arrow trend-up">↑</span></div><div class="sub">当日实时 · 截至 8/31</div>'
);

// === 6. KPI cards - Google 产品 SOV ===
html = html.replace(
  '<div class="value">28.20% <span class="trend-arrow trend-down">↓</span></div><div class="sub">当日实时 · 截至 8/28</div>',
  '<div class="value">25.00% <span class="trend-arrow trend-down">↓</span></div><div class="sub">当日实时 · 截至 8/31</div>'
);

// === 7. KPI cards - TikTok VV SOV (date only) ===
html = html.replace(
  '<div class="value">8.43% <span class="trend-arrow trend-down">↓</span></div><div class="sub">截至 8/28</div>',
  '<div class="value">8.43% <span class="trend-arrow trend-down">↓</span></div><div class="sub">截至 8/25</div>'
);

// === 8. KPI cards - TikTok Search SOV ===
html = html.replace(
  '<div class="value">1.02% <span class="trend-arrow trend-up">↑</span></div><div class="sub">截至 8/28</div>',
  '<div class="value">2.51% <span class="trend-arrow trend-up">↑</span></div><div class="sub">截至 8/26</div>'
);

// === 9. KPI cards - 消耗进度 ===
html = html.replace(
  '99.17% <span class="trend-arrow trend-up">↑</span></div><div class="sub">截至 8月25日 · 累计消耗 $195,771</div>',
  '103.29% <span class="trend-arrow trend-up">↑</span></div><div class="sub">截至 8月30日 · 累计消耗 $237,573</div>'
);

// === 10. KPI cards - DM总曝光 ===
html = html.replace(
  '<div class="value" style="color:#6366f1;">486.5M</div><div class="sub">= TT 352.9M + Meta 144.3M + Youtube 19.1M</div>',
  '<div class="value" style="color:#6366f1;">560.3M</div><div class="sub">= TT 396.9M + Meta 144.3M + Youtube 19.1M</div>'
);

// === 11. Lamborghini section - Google 品牌 SOV ===
html = html.replace(
  '<div class="value">7.00% <span class="trend-arrow trend-up">↑</span></div><div class="sub">当日实时 · 8/24</div>',
  '<div class="value">7.64% <span class="trend-arrow trend-up">↑</span></div><div class="sub">当日实时 · 8/31</div>'
);

// === 12. Lamborghini section - Google 产品 SOV ===
html = html.replace(
  '<div class="value">28.20% <span class="trend-arrow trend-up">↑</span></div><div class="sub">当日实时 · 8/24</div>',
  '<div class="value">25.00% <span class="trend-arrow trend-up">↑</span></div><div class="sub">当日实时 · 8/31</div>'
);

// === 13. Lamborghini section - TT VV SOV date ===
html = html.replace(
  '<div class="value">8.43%</div><div class="sub">截至 8/28</div>',
  '<div class="value">8.43%</div><div class="sub">截至 8/25</div>'
);

// === 14. Lamborghini section - TT Search SOV ===
html = html.replace(
  '<div class="value">1.02%</div><div class="sub">截至 8/28</div>',
  '<div class="value">2.51%</div><div class="sub">截至 8/26</div>'
);

// === 15. Lamborghini section - TT曝光 ===
html = html.replace(
  '<div class="value" style="color:#3b82f6;">45.12M</div><div class="sub">8/17-8/25 累计</div>',
  '<div class="value" style="color:#3b82f6;">46.71M</div><div class="sub">8/17-8/25 累计</div>'
);

// === 16. Lamborghini section - Meta曝光 ===
html = html.replace(
  '<div class="value" style="color:#ef4444;">29.29M</div><div class="sub">8/17-8/27 累计</div>',
  '<div class="value" style="color:#ef4444;">30.71M</div><div class="sub">8/17-8/27 累计</div>'
);

// === 17. Lamborghini section - 消耗 ===
html = html.replace(
  '<div class="value" style="color:var(--purple);">$35,235</div><div class="sub">8/17-8/28 累计</div>',
  '<div class="value" style="color:var(--purple);">$42,524</div><div class="sub">8/17-8/30 累计</div>'
);

// === 18. Google chart data - add 8/28 and 8/31 ===
html = html.replace('"8月20日","8月24日"];', '"8月20日","8月24日","8月28日","8月31日"];');
html = html.replace('7.27,8.00];', '7.27,8.00,7.59,7.64];');
html = html.replace('21.50,27.00];', '21.50,27.00,28.20,25.00];');

// === 19. TT chart data - add 8/26 ===
// vvLabels - add "8月26日"
const dates56 = '["7月1日","7月2日","7月3日","7月4日","7月5日","7月6日","7月7日","7月8日","7月9日","7月10日","7月11日","7月12日","7月13日","7月14日","7月15日","7月16日","7月17日","7月18日","7月19日","7月20日","7月21日","7月22日","7月23日","7月24日","7月25日","7月26日","7月27日","7月28日","7月29日","7月30日","7月31日","8月1日","8月2日","8月3日","8月4日","8月5日","8月6日","8月7日","8月8日","8月9日","8月10日","8月11日","8月12日","8月13日","8月14日","8月15日","8月16日","8月17日","8月18日","8月19日","8月20日","8月21日","8月22日","8月23日","8月24日","8月25日"]';
const dates57 = dates56.replace('"]', ',"8月26日"]');

// Replace vvLabels
html = html.replace('const vvLabels = ' + dates56, 'const vvLabels = ' + dates57);
// Replace searchLabels
html = html.replace('const searchLabels = ' + dates56, 'const searchLabels = ' + dates57);

// vvSov: add null for 8/26
html = html.replace('8.43,8.43];', '8.43,8.43,null];');
// searchSov: add 2.51 for 8/26
html = html.replace('1.00,1.02];', '1.00,1.02,2.51];');

// === 20. Progress chart data - add 8/26-8/30 ===
const dates61 = dates56.replace('"]', ',"8月26日","8月27日","8月28日","8月29日","8月30日"]');
html = html.replace('const spendLabels = ' + dates56, 'const spendLabels = ' + dates61);

// spendProgress: add 5 new values
html = html.replace('95.02,96.33];', '95.02,96.33,98.81,99.88,101.03,102.16,103.29];');
// spendAmount: add 5 new values
html = html.replace('1510.19,3039.06];', '1510.19,3039.06,3575.61,2477.64,2623.99,2616.81,2597.53];');
// expProgress: add 5 null values
html = html.replace('155.43,158.77];', '155.43,158.77,null,null,null,null,null];');

// === 21. Notes ===
html = html.replace(
  '品牌 SOV 最新 7.00%（8/24）；产品 SOV 最新 28.20%（8/24）。',
  '品牌 SOV 最新 7.64%（8/31）；产品 SOV 最新 25.00%（8/31）。'
);
html = html.replace(
  'VV SOV（左轴）从 7/1 的 8.43% 升至 7/24 峰值 24.97%，最新 8.43%（8/18）；Search SOV（右轴）最新 1.02%（8/19）。',
  'VV SOV（左轴）从 7/1 的 2.77% 升至 7/24 峰值 24.97%，最新 8.43%（8/25）；Search SOV（右轴）最新 2.51%（8/26）。'
);
html = html.replace(
  '消耗进度（左轴）至 8/18 达 99.17%，曝光完成进度（左轴）至 8/18 达 158.77%',
  '消耗进度（左轴）至 8/30 达 103.29%，曝光完成进度（左轴）至 8/25 达 158.77%'
);

// === 22. Summary table ===
html = html.replace(
  '<tr><td>Google 品牌 SOV</td><td>7.00%</td><td>—</td><td>8月24日</td><td>TECNO 搜索份额</td></tr>',
  '<tr><td>Google 品牌 SOV</td><td>7.64%</td><td>—</td><td>8月31日</td><td>TECNO 搜索份额</td></tr>'
);
html = html.replace(
  '<tr><td>Google 产品 SOV</td><td>28.20%</td><td>—</td><td>8月24日</td><td>POVA 8 搜索份额</td></tr>',
  '<tr><td>Google 产品 SOV</td><td>25.00%</td><td>—</td><td>8月31日</td><td>POVA 8 搜索份额</td></tr>'
);
html = html.replace(
  '<tr><td>TikTok VV SOV</td><td>8.43%</td><td style="color:var(--red);font-weight:600;">10%（27.7% ⚠️）</td><td>8月18日</td><td>付费曝光占比，低于 KPI</td></tr>',
  '<tr><td>TikTok VV SOV</td><td>8.43%</td><td style="color:var(--red);font-weight:600;">10%（84.3% ⚠️）</td><td>8月25日</td><td>付费曝光占比，低于 KPI</td></tr>'
);
html = html.replace(
  '<tr><td>TikTok Search SOV</td><td>1.02%</td><td style="color:var(--red);font-weight:600;">10%（22.2% ⚠️）</td><td>8月19日</td><td>搜索曝光占比</td></tr>',
  '<tr><td>TikTok Search SOV</td><td>2.51%</td><td style="color:var(--red);font-weight:600;">10%（25.1% ⚠️）</td><td>8月26日</td><td>搜索曝光占比</td></tr>'
);
html = html.replace(
  '<tr><td style="color:var(--purple);font-weight:600;">消耗进度</td><td style="color:var(--purple);font-weight:700;">99.17%</td><td>—</td><td>8月18日</td><td>累计消耗 $195,771</td></tr>',
  '<tr><td style="color:var(--purple);font-weight:600;">消耗进度</td><td style="color:var(--purple);font-weight:700;">103.29%</td><td>—</td><td>8月30日</td><td>累计消耗 $237,573</td></tr>'
);
html = html.replace(
  '<tr><td style="color:#3b82f6;font-weight:600;">TikTok曝光</td><td style="color:#3b82f6;font-weight:700;">352.9M</td><td>—</td><td>8月18日</td><td>TT总曝光</td></tr>',
  '<tr><td style="color:#3b82f6;font-weight:600;">TikTok曝光</td><td style="color:#3b82f6;font-weight:700;">396.9M</td><td>—</td><td>8月25日</td><td>TT总曝光</td></tr>'
);
html = html.replace(
  '<tr><td style="color:#ef4444;font-weight:600;">Meta曝光</td><td style="color:#ef4444;font-weight:700;">144.3M</td><td>—</td><td>8月17日</td><td>Meta 平台曝光</td></tr>',
  '<tr><td style="color:#ef4444;font-weight:600;">Meta曝光</td><td style="color:#ef4444;font-weight:700;">144.3M</td><td>—</td><td>8月27日</td><td>Meta 平台曝光</td></tr>'
);
html = html.replace(
  '<tr><td style="color:#6366f1;font-weight:600;">DM总曝光</td><td style="color:#6366f1;font-weight:700;">486.5M</td><td>—</td><td>8月18日</td><td>= TT 352.9M + Meta 144.3M + Youtube 19.1M</td></tr>',
  '<tr><td style="color:#6366f1;font-weight:600;">DM总曝光</td><td style="color:#6366f1;font-weight:700;">560.3M</td><td>—</td><td>8月25日</td><td>= TT 396.9M + Meta 144.3M + Youtube 19.1M</td></tr>'
);

fs.writeFileSync(path, html, 'utf8');
console.log('✅ All data updated successfully!');

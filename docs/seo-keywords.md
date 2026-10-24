# 海外 SEO 关键词策略（自动风环 / 吹膜自动化）

> 说明：Google 官方已明确 **不使用 `<meta name="keywords">`** 作为排名因素。本项目的 keywords 数组主要用于保持术语一致，真正的排名抓手是 **title、description、H1/H2、正文、图片 alt、内链和页面体验**。以下关键词请优先落到这些位置，而不是堆在 meta 里。

## 1. 市场与搜索意图

海外买家通常分三类搜索：

| 意图 | 典型搜索词 | 对应页面 |
| --- | --- | --- |
| 了解技术 | how to control film thickness in blown film, air ring working principle | 新闻/技术文章 |
| 选型对比 | automatic air ring vs IBC, air ring types, thickness gauge comparison | 产品页/博客 |
| 采购询价 | automatic air ring manufacturer, auto air ring supplier, air ring price, air ring retrofit | 首页/产品页/联系页 |

自动风环是细分品类，搜索量不大，但商业意图强。优先级应是 **“automatic air ring + blown film + manufacturer/supplier”**，而不是单独抢 “air ring”（容易被空调、气环等无关搜索稀释）。

## 2. 英文核心词（Primary）

按重要性排序，建议全站统一使用：

1. automatic air ring
2. auto air ring
3. air ring for blown film
4. blown film air ring
5. air ring control system
6. blown film thickness control
7. automatic film thickness control
8. blown film thickness gauge
9. online thickness gauge
10. gravimetric dosing system
11. loss-in-weight feeder
12. blown film automation

## 3. 分页面关键词映射

| 页面 | 主词（Title/H1） | 次级词（H2/正文/Alt） |
| --- | --- | --- |
| 首页 | automatic air ring manufacturer | auto air ring, air ring for blown film, blown film thickness control, blown film automation |
| 关于我们 | automatic air ring manufacturer China | auto air ring supplier, blown film equipment supplier, JINJIU Automation |
| 产品总览 | blown film air ring | automatic air ring, blown film thickness gauge, online thickness gauge, gravimetric dosing system, loss-in-weight feeder |
| Auto Air Ring | auto air ring for blown film | automatic air ring, air volume control, air temperature control, automatic film thickness control |
| Height-Adjustable Air Ring | height adjustable air ring | lift automatic air ring, air ring height adjustment, blown film air ring |
| Cross-Direction Gauge | cross direction thickness gauge | traversing thickness gauge, blown film thickness gauge, non-contact thickness gauge |
| Rotary Gauge | rotary thickness gauge | ring scanning thickness gauge, blown film thickness measurement, online thickness gauge |
| X-Ray Gauge | X-ray thickness gauge | X-ray rotary thickness gauge, non-contact film thickness measurement |
| Dosing | gravimetric dosing system | multi-component dosing system, blown film dosing system, gravimetric blender |
| Loss-in-Weight | loss-in-weight feeder | single loss-in-weight feeder, gravimetric feeding system, extruder feeding system |
| 解决方案 | blown film automation | blown film control system, film thickness control solution, air ring automation, blown film line upgrade |
| 案例 | automatic air ring application | auto air ring case study, blown film line upgrade, film thickness uniformity |
| 新闻 | blown film industry news | blown film technology, air ring technology, plastics exhibition |
| 联系 | automatic air ring quotation | auto air ring supplier, air ring selection, custom air ring solution |

## 4. 长尾内容选题（建议每月 2–4 篇）

这些词搜索意图明确，竞争低于产品大词，适合用新闻/技术文章承接：

- How to control film thickness in blown film production
- Automatic air ring working principle (air volume vs. air temperature control)
- How to reduce gauge variation in blown film (thickness profile control)
- Automatic air ring retrofit: what to check before upgrading an existing line
- Gravimetric dosing vs. volumetric dosing for blown film
- X-ray vs. optical thickness gauge for blown film: which one to choose
- LDPE vs. LLDPE vs. HDPE: air ring settings and thickness control
- 5-layer co-extrusion blown film: thickness control challenges
- Case study: achieving ±2–4% thickness deviation on a high-speed line
- Blown film bubble cooling: air ring vs. IBC

每篇文章建议：

- 标题包含一个长尾词，而不是只写 “News”；
- H1 与 title 一致或近似；
- 首段 100 词内出现主词；
- 至少 2 个 H2 覆盖相关子问题；
- 配图 alt 写具体内容（如 “automatic air ring on a 5-layer blown film line”），不要写 “image1”；
- 内链到对应产品页和联系页，锚文本用关键词而不是 “click here”。

## 5. 标题与描述写法

- Title：`主关键词 + 应用场景/价值 + 品牌`，英文控制在 **60 字符左右**。
  例：`Auto Air Ring for Blown Film | JINJIU Automation`
- Description：**120–155 字符**，包含主词 + 参数/结果 + 行动号召。
  例：`JINJIU automatic air ring for blown film lines: closed-loop air volume and temperature control, ±2–4% thickness deviation, and 10–20% higher output.`
- 一个页面只主打一个主词，不要把所有产品词塞进首页 title。
- 产品名本身要可搜索：避免 `Dosing`、`solutions` 这类过于宽泛的词，英文已改为 `Gravimetric Dosing System`、`Blown Film Solutions`。

## 6. 本地化注意

站点已有 `en / zh / ru / ko / vi / tr` 六个语言版本，建议：

- 英文页只放英文关键词，不混中文；
- 俄语、韩语、越南语、土耳其语页面使用当地语言的核心词，同时保留英文产品名（B2B 买家常用英文搜索）；
- 每个语言版本的 title/description 不要直接机翻英文，保持本地表达；
- hreflang 已由 `languageAlternates()` 自动生成，新增页面时记得传入正确的 `locales`。

## 7. 技术 SEO 检查清单

- [x] 每个页面有唯一 title / description
- [x] 产品页 title 包含产品词 + 应用场景
- [x] 多语言 title 不再重复拼接品牌名
- [x] 分页面 keywords 元数据（Bing 仍会参考）
- [x] canonical / hreflang / og:url 由 `pageMetadata()` 统一生成
- [ ] 为 Organization、Product、FAQ 增加 JSON-LD 结构化数据（下一步建议）
- [ ] 产品页补充 80–150 词的可见介绍段落（当前只有参数列表）
- [ ] 图片 alt 从产品名改为“产品 + 应用场景”
- [ ] 在 Google Search Console 提交 sitemap，并按国家/语言观察查询词

## 8. 不建议的做法

- 不要堆砌无关词（如 `IBC`、`die gap control`），除非页面确实提供该功能；
- 不要为每个产品页复制同一段描述；
- 不要用隐藏文字/关键词堆砌，Google 会判定为 spam；
- 不要把中文关键词放在英文页面的 meta 里。

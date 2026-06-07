
const CFG = {"title": "Ver.2.3 簡易イラスト情報追加版", "features": ["新カード追加", "新イベント追加", "新レリック追加", "ショップカテゴリ化", "デッキ確認画面改善", "戦闘勝利結果画面", "ボスギミック説明", "リザルト強化", "熟練モード再調整", "選択中デッキ確認修正", "ショップ再購入防止強化", "状態異常削除改善", "一画面UI", "最新ログ3件", "判断情報集約", "タイトル画面", "戦績保存", "図鑑", "カードアート", "レリックアート", "絵文字イラスト"], "cards": [{"id": "seri", "name": "競り落とし", "cost": 1, "type": "攻撃", "text": "敵に7ダメージ。", "kind": "damage", "value": 7}, {"id": "koori", "name": "氷締め", "cost": 1, "type": "防御", "text": "ブロックを6得る。", "kind": "block", "value": 6}, {"id": "meiki", "name": "目利き", "cost": 0, "type": "技", "text": "カードを1枚引く。", "kind": "draw", "value": 1}, {"id": "souba", "name": "相場上昇", "cost": 1, "type": "強化", "text": "この戦闘中、攻撃力+2。", "kind": "power", "value": 2}, {"id": "oomono", "name": "大物入荷", "cost": 2, "type": "攻撃", "text": "敵に15ダメージ。", "kind": "damage", "value": 15}, {"id": "zaiko", "name": "在庫整理", "cost": 1, "type": "技", "text": "カードを2枚引く。", "kind": "draw", "value": 2}, {"id": "nakagai", "name": "仲卸の一声", "cost": 1, "type": "妨害", "text": "敵の次の攻撃を3下げる。", "kind": "weaken", "value": 3}, {"id": "shinsen_old", "name": "鮮度勝負・旧", "cost": 1, "type": "攻撃", "text": "手札の枚数×2ダメージ。", "kind": "handDamage", "value": 2}, {"id": "tairyoh", "name": "大漁旗", "cost": 2, "type": "防御", "text": "ブロックを12得る。", "kind": "block", "value": 12}, {"id": "katsugi", "name": "担ぎ込み", "cost": 0, "type": "攻撃", "text": "敵に3ダメージ。カードを1枚引く。", "kind": "damageDraw", "value": 3, "draw": 1}, {"id": "asa", "name": "朝獲れ", "cost": 0, "type": "鮮度", "text": "鮮度+2。", "kind": "fresh", "value": 2}, {"id": "shinsen", "name": "鮮度勝負", "cost": 1, "type": "攻撃", "text": "鮮度×3ダメージ。", "kind": "freshDamage", "value": 3}, {"id": "ikigyo", "name": "活魚管理", "cost": 1, "type": "技", "text": "カードを1枚引く。鮮度3以上ならさらに1枚引く。", "kind": "freshDraw", "value": 1}, {"id": "iji", "name": "鮮度維持", "cost": 1, "type": "防御", "text": "ブロック5、鮮度+1。", "kind": "blockFresh", "value": 5, "fresh": 1}, {"id": "furyo", "name": "不良在庫処分", "cost": 1, "type": "廃棄", "text": "手札の左端1枚を戦闘中だけ廃棄。", "kind": "exhaustLeft", "value": 1}, {"id": "oi", "name": "追い競り", "cost": 1, "type": "攻撃", "text": "5ダメージ。このターンに使ったカード1枚につき+2。", "kind": "comboDamage", "value": 5, "bonus": 2}, {"id": "hirou", "name": "疲労", "cost": 0, "type": "状態異常", "text": "何もしない。使用すると廃棄。", "kind": "exhaustSelf", "value": 0, "status": true}, {"id": "sashine", "name": "指値勝負", "cost": 0, "type": "攻撃", "text": "残りエナジーを全て使い、消費分×6ダメージ。", "kind": "spendEnergy", "value": 6}, {"id": "yasune", "name": "安値仕入れ", "cost": 0, "type": "技", "text": "エナジー+1。", "kind": "energy", "value": 1}, {"id": "horei", "name": "保冷箱", "cost": 2, "type": "防御", "text": "ブロック10。次ターン開始時にもブロック5。", "kind": "blockNext", "value": 10, "next": 5}, {"id": "hanesha", "name": "氷壁反射", "cost": 1, "type": "攻撃", "text": "現在のブロックの半分だけ敵にダメージ。", "kind": "blockDamage", "value": 0.5}, {"id": "tanaoroshi", "name": "棚卸し", "cost": 1, "type": "技", "text": "捨て札から1枚を手札に戻す。", "kind": "recoverDiscard", "value": 1}, {"id": "kakaku", "name": "価格転嫁", "cost": 2, "type": "攻撃", "text": "12ダメージ。コインを5得る。", "kind": "damageCoin", "value": 12, "coin": 5}, {"id": "mizunure", "name": "水濡れ伝票", "cost": 0, "type": "状態異常", "text": "何もしない。使用すると廃棄。", "kind": "exhaustSelf", "value": 0, "status": true}, {"id": "junbi", "name": "開市準備", "cost": 1, "type": "技", "text": "カードを1枚引き、エナジー+1。", "kind": "drawEnergy", "value": 1, "energy": 1}, {"id": "kaitai", "name": "解体ショー", "cost": 2, "type": "攻撃", "text": "8ダメージを2回。", "kind": "multiDamage", "value": 8, "times": 2}, {"id": "shokunin", "name": "職人の目", "cost": 1, "type": "強化", "text": "攻撃力+1。カードを1枚引く。", "kind": "powerDraw", "value": 1, "draw": 1}, {"id": "gyobako", "name": "魚箱バリケード", "cost": 1, "type": "防御", "text": "ブロック4。手札が5枚以上ならブロック+4。", "kind": "handBlock", "value": 4, "bonus": 4}, {"id": "netuke", "name": "値付け", "cost": 1, "type": "技", "text": "カードを1枚引く。コインを3得る。", "kind": "drawCoin", "value": 1, "coin": 3}, {"id": "senbetsu", "name": "選別", "cost": 0, "type": "技", "text": "カードを1枚引く。", "kind": "draw", "value": 1}, {"id": "kansai", "name": "完済奨励", "cost": 1, "type": "防御", "text": "ブロック7。HPを2回復。", "kind": "blockHeal", "value": 7, "heal": 2}, {"id": "odori", "name": "活け締め連携", "cost": 1, "type": "攻撃", "text": "6ダメージ。鮮度が4以上ならもう一度6ダメージ。", "kind": "freshMulti", "value": 6}, {"id": "zenryoku", "name": "全力競り", "cost": 1, "type": "攻撃", "text": "コインを10消費できるなら18ダメージ。足りなければ8ダメージ。", "kind": "coinSpendDamage", "value": 18, "fallback": 8, "coinCost": 10}, {"id": "bakuhatsu", "name": "鮮度爆発", "cost": 1, "type": "攻撃", "text": "鮮度を全て消費し、消費した鮮度×5ダメージ。", "kind": "freshSpendDamage", "value": 5}, {"id": "kanryo", "name": "棚卸完了", "cost": 1, "type": "攻撃", "text": "この戦闘で廃棄したカード1枚につき5ダメージ。", "kind": "exhaustDamage", "value": 5}, {"id": "chokuso", "name": "産地直送", "cost": 1, "type": "鮮度", "text": "カードを1枚引く。鮮度+1。", "kind": "drawFresh", "value": 1, "fresh": 1}, {"id": "kessai", "name": "即時決済", "cost": 0, "type": "技", "text": "コインを6得る。カードを1枚引く。", "kind": "coinDraw", "value": 6, "draw": 1}, {"id": "kori_reflect", "name": "氷壁反射・改", "cost": 2, "type": "攻撃", "text": "現在のブロック分だけ敵にダメージ。", "kind": "blockDamage", "value": 1}, {"id": "nidanseri", "name": "二段競り", "cost": 1, "type": "攻撃", "text": "4ダメージを2回。このターン3枚目以降ならさらに1回。", "kind": "comboMulti", "value": 4, "times": 2}, {"id": "shiwake", "name": "仕分け指示", "cost": 1, "type": "技", "text": "カードを2枚引く。状態異常が手札にあればブロック5。", "kind": "drawBlockIfStatus", "value": 2, "block": 5}, {"id": "chilled", "name": "冷え", "cost": 0, "type": "状態異常", "text": "何もしない。使用すると廃棄。手札にあると攻撃の目安が下がる。", "kind": "exhaustSelf", "value": 0, "status": true}, {"id": "miss_doc", "name": "伝票ミス", "cost": 0, "type": "状態異常", "text": "何もしない。使用すると廃棄。", "kind": "exhaustSelf", "value": 0, "status": true}], "enemies": [{"name": "スライム箱", "hp": 26, "actions": ["attack8", "attack8", "defend"]}, {"name": "荒ぶる台車", "hp": 32, "actions": ["attack10", "defend", "attack12"]}, {"name": "深夜の検品係", "hp": 28, "actions": ["attack7", "attack7", "buff"]}, {"name": "迷子の仕入伝票", "hp": 30, "actions": ["attack7", "status:hirou", "attack10"]}, {"name": "冷凍庫の番人", "hp": 39, "actions": ["defend", "attack9", "defend"]}, {"name": "市場の影競り人", "hp": 34, "actions": ["attack8", "drain", "attack11"]}, {"name": "錆びたフォークリフト", "hp": 37, "actions": ["attack6", "attack14", "status:mizunure"]}, {"name": "伝票ミスの山", "hp": 33, "actions": ["status:miss_doc", "attack9", "status:hirou"]}, {"name": "冷気を吐く保冷庫", "hp": 42, "actions": ["status:chilled", "defend", "attack12"]}, {"name": "競り場の横取り屋", "hp": 36, "actions": ["coinSteal", "attack10", "drain", "attack12"]}], "bosses": [{"name": "巨大マグロの亡霊", "hp": 82, "actions": ["attack14", "defend", "attack18", "buff"], "gimmick": "3ターン周期で強攻撃。防御を厚めにすると安定します。"}, {"name": "相場を操る黒幕", "hp": 77, "actions": ["status:hirou", "attack12", "drain", "attack20"], "gimmick": "コインを奪い、エナジー減少も使います。買い物後の残コインに注意。"}, {"name": "冷凍庫の主", "hp": 93, "actions": ["defend", "attack16", "status:mizunure", "attack16"], "gimmick": "状態異常と高ブロックで長期戦に持ち込みます。鮮度が落ちる前に攻めましょう。"}], "battleCount": 8, "fresh": true, "relic": true, "map": true, "shop": true, "upgrade": true, "ui": true, "events": true, "elite": true, "final": true};
let cards = {}; CFG.cards.forEach(c=>cards[c.id]=c);
const TYPE_ART = {"攻撃": {"icon": "🐟", "subIcon": "⚔", "bg1": "#7f1d1d", "bg2": "#dc2626", "frame": "#fecaca"}, "防御": {"icon": "🧊", "subIcon": "🛡", "bg1": "#164e63", "bg2": "#0891b2", "frame": "#a5f3fc"}, "技": {"icon": "📋", "subIcon": "✨", "bg1": "#14532d", "bg2": "#16a34a", "frame": "#bbf7d0"}, "鮮度": {"icon": "🌅", "subIcon": "🐠", "bg1": "#9a3412", "bg2": "#f97316", "frame": "#fed7aa"}, "強化": {"icon": "📈", "subIcon": "💪", "bg1": "#713f12", "bg2": "#ca8a04", "frame": "#fde68a"}, "妨害": {"icon": "📣", "subIcon": "↓", "bg1": "#581c87", "bg2": "#9333ea", "frame": "#e9d5ff"}, "廃棄": {"icon": "🧹", "subIcon": "📦", "bg1": "#3f3f46", "bg2": "#71717a", "frame": "#e4e4e7"}, "状態異常": {"icon": "⚠", "subIcon": "💧", "bg1": "#450a0a", "bg2": "#991b1b", "frame": "#fca5a5"}};
const SPECIFIC_CARD_ART = {"seri": {"icon": "🐟", "subIcon": "💥", "bg1": "#0f172a", "bg2": "#1d4ed8", "frame": "#93c5fd"}, "koori": {"icon": "🧊", "subIcon": "🛡", "bg1": "#164e63", "bg2": "#0891b2", "frame": "#67e8f9"}, "meiki": {"icon": "👁", "subIcon": "📋", "bg1": "#14532d", "bg2": "#16a34a", "frame": "#86efac"}, "souba": {"icon": "📈", "subIcon": "💰", "bg1": "#713f12", "bg2": "#d97706", "frame": "#fde68a"}, "oomono": {"icon": "🐟", "subIcon": "👑", "bg1": "#7c2d12", "bg2": "#ea580c", "frame": "#fed7aa"}, "zaiko": {"icon": "📦", "subIcon": "🔄", "bg1": "#374151", "bg2": "#64748b", "frame": "#cbd5e1"}, "nakagai": {"icon": "📣", "subIcon": "↓", "bg1": "#581c87", "bg2": "#9333ea", "frame": "#e9d5ff"}, "katsugi": {"icon": "🏃", "subIcon": "🐟", "bg1": "#064e3b", "bg2": "#059669", "frame": "#a7f3d0"}, "asa": {"icon": "🌅", "subIcon": "🐠", "bg1": "#9a3412", "bg2": "#fb923c", "frame": "#fed7aa"}, "shinsen": {"icon": "✨", "subIcon": "🐟", "bg1": "#166534", "bg2": "#22c55e", "frame": "#bbf7d0"}, "ikigyo": {"icon": "🐠", "subIcon": "💧", "bg1": "#0e7490", "bg2": "#06b6d4", "frame": "#a5f3fc"}, "iji": {"icon": "🧊", "subIcon": "✨", "bg1": "#0369a1", "bg2": "#38bdf8", "frame": "#bae6fd"}, "furyo": {"icon": "🧹", "subIcon": "📦", "bg1": "#3f3f46", "bg2": "#71717a", "frame": "#e4e4e7"}, "oi": {"icon": "🔨", "subIcon": "💰", "bg1": "#7f1d1d", "bg2": "#ef4444", "frame": "#fecaca"}, "hirou": {"icon": "😵", "subIcon": "⚠", "bg1": "#450a0a", "bg2": "#991b1b", "frame": "#fecaca"}, "mizunure": {"icon": "💧", "subIcon": "📄", "bg1": "#1e3a8a", "bg2": "#64748b", "frame": "#bfdbfe"}, "sashine": {"icon": "💰", "subIcon": "⚔", "bg1": "#78350f", "bg2": "#f59e0b", "frame": "#fde68a"}, "yasune": {"icon": "🏷", "subIcon": "⚡", "bg1": "#14532d", "bg2": "#22c55e", "frame": "#bbf7d0"}, "horei": {"icon": "🧊", "subIcon": "📦", "bg1": "#164e63", "bg2": "#0ea5e9", "frame": "#bae6fd"}, "hanesha": {"icon": "🪞", "subIcon": "🛡", "bg1": "#0f766e", "bg2": "#14b8a6", "frame": "#99f6e4"}, "tanaoroshi": {"icon": "📋", "subIcon": "🔍", "bg1": "#334155", "bg2": "#64748b", "frame": "#cbd5e1"}, "kakaku": {"icon": "💴", "subIcon": "➡", "bg1": "#713f12", "bg2": "#ca8a04", "frame": "#fde68a"}, "junbi": {"icon": "🌄", "subIcon": "⚡", "bg1": "#14532d", "bg2": "#16a34a", "frame": "#bbf7d0"}, "kaitai": {"icon": "🔪", "subIcon": "🐟", "bg1": "#7f1d1d", "bg2": "#b91c1c", "frame": "#fecaca"}, "shokunin": {"icon": "👓", "subIcon": "✨", "bg1": "#1e3a8a", "bg2": "#2563eb", "frame": "#bfdbfe"}, "gyobako": {"icon": "📦", "subIcon": "🛡", "bg1": "#164e63", "bg2": "#0891b2", "frame": "#a5f3fc"}, "netuke": {"icon": "🏷", "subIcon": "💰", "bg1": "#713f12", "bg2": "#d97706", "frame": "#fde68a"}, "senbetsu": {"icon": "🔎", "subIcon": "🐟", "bg1": "#14532d", "bg2": "#22c55e", "frame": "#bbf7d0"}, "kansai": {"icon": "🤝", "subIcon": "❤️", "bg1": "#166534", "bg2": "#16a34a", "frame": "#bbf7d0"}, "odori": {"icon": "🐟", "subIcon": "⚡", "bg1": "#0f766e", "bg2": "#14b8a6", "frame": "#99f6e4"}, "seriba": {"icon": "🏛", "subIcon": "⚔", "bg1": "#7f1d1d", "bg2": "#dc2626", "frame": "#fecaca"}, "gyogan": {"icon": "👁", "subIcon": "🐟", "bg1": "#312e81", "bg2": "#4f46e5", "frame": "#c7d2fe"}, "sokobiki": {"icon": "🛟", "subIcon": "📦", "bg1": "#334155", "bg2": "#64748b", "frame": "#cbd5e1"}, "kaisen": {"icon": "🌊", "subIcon": "⚔", "bg1": "#075985", "bg2": "#0284c7", "frame": "#bae6fd"}, "akaji": {"icon": "📉", "subIcon": "💥", "bg1": "#450a0a", "bg2": "#991b1b", "frame": "#fca5a5"}, "gyokai": {"icon": "🤝", "subIcon": "⚡", "bg1": "#14532d", "bg2": "#16a34a", "frame": "#bbf7d0"}, "reitou": {"icon": "❄", "subIcon": "👑", "bg1": "#164e63", "bg2": "#0284c7", "frame": "#bae6fd"}};
function defaultArtFor(type){return TYPE_ART[type]||{icon:"🃏",subIcon:"✨",bg1:"#334155",bg2:"#64748b",frame:"#cbd5e1"}}
function artOfCard(card){let d=cdef(card);return d.art||SPECIFIC_CARD_ART[d.id]||defaultArtFor(d.type)}
function artStyle(art){return `--art-bg1:${art.bg1};--art-bg2:${art.bg2};--art-frame:${art.frame};`}
function cardArtHtml(card){let art=artOfCard(card);return `<div class="cardArt" style="${artStyle(art)}"><div class="cardIcon">${art.icon}</div><div class="cardSubIcon">${art.subIcon||""}</div></div>`}
function relicArtOf(r){return r.art||RELIC_ART[r.id]||{icon:"🎁",subIcon:"",bg1:"#334155",bg2:"#64748b",frame:"#cbd5e1"}}
function relicArtHtml(r){let art=relicArtOf(r);return `<div class="cardArt relicArt" style="${artStyle(art)}"><div class="cardIcon">${art.icon}</div><div class="cardSubIcon">${art.subIcon||""}</div></div>`}

const relicPool = [{"id": "old_ticket", "name": "古い競り札", "text": "戦闘開始時、攻撃力+1。"}, {"id": "cool_bag", "name": "保冷バッグ", "text": "戦闘開始時、ブロック5。"}, {"id": "boots", "name": "早朝の長靴", "text": "戦闘開始時、カードを1枚多く引く。"}, {"id": "armband", "name": "市場の腕章", "text": "カード報酬の候補+1。"}, {"id": "calc", "name": "電卓", "text": "各ターン3枚目に使うカードのコストが0。"}, {"id": "wheel", "name": "台車の車輪", "text": "1ターン目だけエナジー+1。"}, {"id": "knife", "name": "よく研いだ包丁", "text": "攻撃カードのダメージ+1。"}, {"id": "ledger", "name": "帳場ノート", "text": "戦闘勝利時、コイン+12。"}, {"id": "amulet", "name": "豊洲のお守り", "text": "休憩時の回復量+5。"}, {"id": "gloves", "name": "防寒手袋", "text": "状態異常を使うとブロック3。"}, {"id": "cold_key", "name": "冷凍倉庫の鍵", "text": "ターン終了時、ブロックの半分が次ターンに残る。"}, {"id": "red_ledger", "name": "赤字覚悟の帳簿", "text": "コインが0〜5Cの時、攻撃ダメージ+4。"}, {"id": "reverse_market", "name": "逆張り相場表", "text": "カード報酬を取らないたび、最大HP+2。"}, {"id": "glasses", "name": "目利きの眼鏡", "text": "カード報酬候補+1。ただしショップ価格+5C。"}, {"id": "stamp", "name": "検品印", "text": "戦闘勝利時、HPを2回復。"}, {"id": "ice_tag", "name": "氷の値札", "text": "鮮度が3以上なら戦闘開始時ブロック+4。"}];
const RELIC_ART = {"old_ticket": {"icon": "📜", "subIcon": "⚔", "bg1": "#713f12", "bg2": "#ca8a04", "frame": "#fde68a"}, "cool_bag": {"icon": "🎒", "subIcon": "🧊", "bg1": "#164e63", "bg2": "#0891b2", "frame": "#a5f3fc"}, "boots": {"icon": "👢", "subIcon": "🌅", "bg1": "#3f3f46", "bg2": "#71717a", "frame": "#e4e4e7"}, "armband": {"icon": "🏷", "subIcon": "✨", "bg1": "#1e3a8a", "bg2": "#2563eb", "frame": "#bfdbfe"}, "calc": {"icon": "🧮", "subIcon": "0", "bg1": "#581c87", "bg2": "#9333ea", "frame": "#e9d5ff"}, "wheel": {"icon": "🛞", "subIcon": "⚡", "bg1": "#334155", "bg2": "#64748b", "frame": "#cbd5e1"}, "knife": {"icon": "🔪", "subIcon": "✨", "bg1": "#7f1d1d", "bg2": "#dc2626", "frame": "#fecaca"}, "ledger": {"icon": "📒", "subIcon": "💰", "bg1": "#713f12", "bg2": "#d97706", "frame": "#fde68a"}, "amulet": {"icon": "🧿", "subIcon": "❤️", "bg1": "#14532d", "bg2": "#16a34a", "frame": "#bbf7d0"}, "gloves": {"icon": "🧤", "subIcon": "🛡", "bg1": "#164e63", "bg2": "#0891b2", "frame": "#a5f3fc"}, "hammer": {"icon": "🔨", "subIcon": "⚔", "bg1": "#7f1d1d", "bg2": "#b91c1c", "frame": "#fecaca"}, "freezer_key": {"icon": "🗝", "subIcon": "❄", "bg1": "#075985", "bg2": "#0284c7", "frame": "#bae6fd"}, "red_book": {"icon": "📕", "subIcon": "0", "bg1": "#450a0a", "bg2": "#991b1b", "frame": "#fca5a5"}, "reverse_chart": {"icon": "📉", "subIcon": "✨", "bg1": "#581c87", "bg2": "#9333ea", "frame": "#e9d5ff"}, "glasses": {"icon": "👓", "subIcon": "🔎", "bg1": "#312e81", "bg2": "#4f46e5", "frame": "#c7d2fe"}, "seal": {"icon": "🏮", "subIcon": "💰", "bg1": "#78350f", "bg2": "#f59e0b", "frame": "#fde68a"}};

const eventPool = [{"title": "早朝の競り場", "body": "威勢のよい声が響く。少し無理をすれば良い札が取れそうだ。", "a": "HPを5失い、レアカードを得る", "b": "何もせず進む", "effect": "rare"}, {"title": "帳場の差し入れ", "body": "温かいお茶をもらった。", "a": "HPを8回復", "b": "コインを10得る", "effect": "heal_or_coin"}, {"title": "在庫の山", "body": "古いカードを整理できそうだ。", "a": "デッキの先頭カードを削除", "b": "カードを1枚得る", "effect": "remove_or_card"}, {"title": "市場の噂", "body": "次の敵の動きが少し読める気がする。", "a": "ブロック系カードを得る", "b": "攻撃系カードを得る", "effect": "typed_card"}, {"title": "夜明けの海風", "body": "気力が戻ってくる。", "a": "最大HP+4", "b": "鮮度系カードを得る", "effect": "maxhp_or_fresh"}, {"title": "闇競り", "body": "見慣れない札が裏で流れている。大きく賭ければ見返りも大きい。", "a": "HPを12失い、カードを2枚得る", "b": "コインを30失い、レリックを得る", "effect": "dark_auction"}, {"title": "伝票の山", "body": "山積みの伝票を整理する時間がある。", "a": "カードを1枚削除", "b": "疲労を2枚得て、コイン+40", "effect": "paper_mountain"}, {"title": "謎の仲卸", "body": "腕利きの仲卸が、札の見直しを提案してきた。", "a": "カードを1枚強化", "b": "HPを5失い、カードを1枚削除", "effect": "mystery_middleman"}, {"title": "冷凍庫の奥", "body": "奥に進むほど身体が冷えるが、貴重な保冷具が眠っている。", "a": "状態異常「冷え」を得てレリックを得る", "b": "HPを10回復", "effect": "freezer_depth"}, {"title": "本日の特売", "body": "次の店で使える割引券をもらった。", "a": "コイン+15", "b": "カードを取らず最大HP+2", "effect": "sale_day"}];
let p,e,step,turn,game,route,playedThisTurn,currentNode,difficulty="normal",usedRelicIds=[];

function rnd(a){return a[Math.floor(Math.random()*a.length)]}
function shuffle(a){a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

function log(t){
 const p=document.createElement("p");p.textContent=t;document.getElementById("log").prepend(p);
 const latest=document.getElementById("latestLog");
 if(latest){
   const item=document.createElement("div");item.textContent=t;latest.prepend(item);
   while(latest.children.length>3)latest.removeChild(latest.lastChild);
 }
 const cm=document.getElementById("centerMsg");
 if(cm)cm.textContent=t;
}
function toggleFullLog(){const el=document.getElementById("fullLogPanel"); if(el)el.style.display=el.style.display==="block"?"none":"block";}

function flash(id){let el=document.getElementById(id);el.classList.remove("flash");void el.offsetWidth;el.classList.add("flash")}
function floatText(id,t){if(!CFG.ui)return;let el=document.getElementById(id);let s=document.createElement("div");s.className="float";s.textContent=t;s.style.left="50%";s.style.top="50%";el.appendChild(s);setTimeout(()=>s.remove(),750)}
function hasRelic(id){return p.relics.some(r=>r.id===id)}
function cardLabel(c){return c.up?cards[c.id].name+"+":" "+cards[c.id].name}
function cdef(card){return cards[card.id||card]}
function newCard(id,up=false){return {id,up}}


function appStats(){
  try{return JSON.parse(localStorage.getItem("toyosuDungeonStats")||"{}")}catch(e){return {}}
}
function saveAppStats(clear, won){
  const s=appStats();
  s.plays=(s.plays||0)+1;
  s.wins=(s.wins||0)+(won?1:0);
  s.losses=(s.losses||0)+(won?0:1);
  s.bestMaxDamage=Math.max(s.bestMaxDamage||0, p?.stats?.maxDamage||0);
  s.bestRelics=Math.max(s.bestRelics||0, p?.relics?.length||0);
  s.lastMode=difficulty||"-";
  s.lastResult=won?"クリア":"敗北";
  s.updatedAt=new Date().toLocaleString();
  localStorage.setItem("toyosuDungeonStats",JSON.stringify(s));
}
function showTitle(){
  document.getElementById("verTitle").textContent=CFG.title;
  document.getElementById("features").textContent="搭載: "+CFG.features.join(" / ");
  const q=document.getElementById("choiceZone");
  q.style.display="block";
  document.getElementById("result").style.display="none";
  document.getElementById("choiceTitle").textContent="豊洲ダンジョン：競り札の迷宮";
  document.getElementById("choiceBody").textContent="Web版ミニ完成。タイトル画面、戦績保存、カード/レリック図鑑を追加しました。\nまずは「ゲーム開始」から難易度を選んでください。";
  document.getElementById("choiceCards").innerHTML='<div class="titleMenu"><div class="titleHero">競り札に宿った技を使い、豊洲地下迷宮の最深部を目指すローグライク・デッキ構築カードゲームです。</div></div>';
  const btns=document.getElementById("choiceBtns"); btns.innerHTML="";
  addBtn(btns,"ゲーム開始",()=>newRun(),"main");
  addBtn(btns,"戦績を見る",()=>showStatsScreen(),"sec");
  addBtn(btns,"図鑑を見る",()=>showLibraryScreen(),"sec");
}
function showStatsScreen(){
  const s=appStats();
  clearChoice("戦績", "この端末のブラウザに保存された簡易戦績です。");
  const area=document.getElementById("choiceCards");
  area.innerHTML=`<div class="statBoard">
    <div class="statBox"><b>プレイ回数</b><br>${s.plays||0}</div>
    <div class="statBox"><b>クリア回数</b><br>${s.wins||0}</div>
    <div class="statBox"><b>敗北回数</b><br>${s.losses||0}</div>
    <div class="statBox"><b>最高最大ダメージ</b><br>${s.bestMaxDamage||0}</div>
    <div class="statBox"><b>最多レリック</b><br>${s.bestRelics||0}</div>
    <div class="statBox"><b>前回結果</b><br>${s.lastResult||"-"} / ${s.lastMode||"-"}</div>
  </div>`;
  const btns=document.getElementById("choiceBtns"); btns.innerHTML="";
  addBtn(btns,"戻る",()=>showTitle(),"main");
  addBtn(btns,"戦績リセット",()=>{localStorage.removeItem("toyosuDungeonStats");showStatsScreen()},"sec");
}
function showLibraryScreen(){
  clearChoice("図鑑", "現在実装済みのカードとレリック一覧です。効果確認用です。");
  const area=document.getElementById("choiceCards");
  const cardHtml=CFG.cards.filter(c=>!c.status).map(c=>`<div class="libraryItem">${cardArtHtml({id:c.id})}<b>${c.name}</b><br><span class="tag">${c.type}</span><br>コスト:${c.cost}<br>${c.text}</div>`).join("");
  const relicHtml=JSON.parse(JSON.stringify(relicPool)).map(r=>`<div class="libraryItem">${relicArtHtml(r)}<b>${r.name}</b><br><span class="tag">レリック</span><br>${r.text}</div>`).join("");
  area.innerHTML=`<h3>カード</h3><div class="libraryGrid">${cardHtml}</div><h3>レリック</h3><div class="libraryGrid">${relicHtml}</div>`;
  const btns=document.getElementById("choiceBtns"); btns.innerHTML="";
  addBtn(btns,"戻る",()=>showTitle(),"main");
}

function newRun(){
 document.getElementById("verTitle").textContent=CFG.title;
 document.getElementById("features").textContent="搭載: "+CFG.features.join(" / ");
 document.getElementById("result").style.display="none"; document.getElementById("choiceZone").style.display="none"; document.getElementById("log").innerHTML=""; if(document.getElementById("latestLog"))document.getElementById("latestLog").innerHTML=""; if(document.getElementById("fullLogPanel"))document.getElementById("fullLogPanel").style.display="none";
 p={maxHp:60,hp:60,block:0,maxEnergy:3,energy:3,power:0,nextBlock:0,nextEnergyPenalty:0,fresh:5,coin:CFG.shop?40:0,deck:[],draw:[],discard:[],hand:[],exhaust:[],relics:[],stats:{kills:0,elites:0,shops:0,events:0,maxDamage:0,cardsPlayed:0,cardsSkipped:0}};
 for(let i=0;i<5;i++)p.deck.push(newCard("seri")); for(let i=0;i<4;i++)p.deck.push(newCard("koori")); p.deck.push(newCard("katsugi"));
 if(CFG.fresh){p.deck.push(newCard("asa"));p.deck.push(newCard("shinsen"))}
 step=1; turn=1; game="choice"; usedRelicIds=[]; log("探索開始。");
 showDifficulty();
}

function showDifficulty(){
 game="choice"; clearChoice("難易度を選んでください","通常は標準難易度です。熟練はクリア率20%前後を目標に、初期HP・初期コイン・敵の強さ・報酬が厳しくなります。");
 let btns=document.getElementById("choiceBtns");
 addBtn(btns,"通常",()=>{difficulty="normal"; log("通常モードで開始。"); startAfterDifficulty()} ,"main");
 addBtn(btns,"熟練",()=>{difficulty="hard"; p.maxHp=45; p.hp=45; p.coin=24; p.deck.push(newCard("hirou")); p.deck.push(newCard("mizunure")); log("熟練モード：初期HP45、初期コイン24C、状態異常2枚、敵大幅強化。"); startAfterDifficulty()} ,"sec");
 render();
}
function startAfterDifficulty(){ if(CFG.relic) showStarterRelic(); else if(CFG.map) showMap(); else startBattle(step===CFG.battleCount?"boss":"normal"); }

function nextNodeAfterBattle(){
 if(step>=CFG.battleCount){winRun();return}
 step++;
 if(CFG.map) showMap(); else startBattle(step===CFG.battleCount?"boss":(CFG.elite&&step===3?"elite":"normal"));
}

function showMap(){
 game="choice"; clearChoice("次に進む場所を選んでください", `現在 ${step}/${CFG.battleCount}。`);
 const btns=document.getElementById("choiceBtns");
 if(step>=CFG.battleCount){addBtn(btns,"ボス",()=>startBattle("boss"),"main");return}
 let plans={1:["normal"],2:["normal","event"],3:["elite","rest"],4:["normal","shop"],5:["event","normal"],6:["elite","rest"],7:["shop","rest"]};
 let opts=plans[step]||["normal","event","shop"];
 opts.forEach(o=>addBtn(btns,o==="elite"?nodeName(o)+"（危険）":nodeName(o),()=>enterNode(o),o==="elite"?"main":"sec"));
 render();
}
function nodeName(o){return {normal:"通常戦闘",elite:"エリート",event:"イベント",rest:"休憩",shop:"店",boss:"ボス"}[o]}
function enterNode(o){ if(o==="normal"||o==="elite"||o==="boss") startBattle(o); else if(o==="event") showEvent(); else if(o==="rest") showRest(); else if(o==="shop") showShop(); }

function showStarterRelic(){
 game="choice"; clearChoice("初期レリックを1つ選んでください","最初の方針をここで決めます。攻撃・防御・手札のどれを伸ばすか選んでください。");
 let area=document.getElementById("choiceCards");
 relicPool.slice(0,3).forEach(r=>{let b=document.createElement("button");b.className="card";b.innerHTML=`<div class="cardName">${r.name}</div><div class="tag">初期レリック</div><div>${r.text}</div>`;b.onclick=()=>{gainRelic(r); if(CFG.map) showMap(); else startBattle("normal")};area.appendChild(b)});
 render();
}

function startBattle(kind="normal"){
 game="battle"; currentNode=kind; document.getElementById("choiceZone").style.display="none"; turn=1; playedThisTurn=0;
 p.block=0;p.energy=p.maxEnergy;p.power=0;p.nextBlock=0;p.fresh=5;p.hand=[];p.discard=[];p.exhaust=[];p.draw=shuffle(p.deck);
 if(kind==="boss") e=makeEnemy(rnd(CFG.bosses)); else if(kind==="elite") e=makeEnemy(rnd([
   {"name":"古参の帳場番","hp":68,"actions":["attack14","status:hirou","status:hirou","attack18"]},
   {"name":"暴走フォークリフト","hp":72,"actions":["attack20","attack10","buff","attack16"]},
   {"name":"影競りの元締め","hp":66,"actions":["coinSteal","attack13","drain","attack17"]}
 ])); else e=makeEnemy(rnd(CFG.enemies));
 if(difficulty==="hard"){
   let hpMul = kind==="boss" ? 1.42 : (kind==="elite" ? 1.35 : 1.25);
   let strAdd = kind==="boss" ? 6 : (kind==="elite" ? 5 : 4);
   e.maxHp=Math.ceil(e.maxHp*hpMul); e.hp=e.maxHp; e.strength+=strAdd;
   if(kind==="elite") e.block+=6;
   if(kind==="boss") { e.block+=10; p.discard.push(newCard("hirou")); log("熟練ボス戦：疲労が捨て札に混ざった。"); }
 }
 applyRelicStart();
 log(nodeName(kind)+"："+e.name+"が現れた。"); if(kind==="boss") log("ボス特性："+bossTip(e.name)); setIntent(); draw(5+(hasRelic("boots")?1:0)); render();
}
function makeEnemy(t){return {name:t.name,maxHp:t.hp,hp:t.hp,block:0,actions:t.actions,intentIndex:0,intent:"",intentText:"",weakNext:0,strength:0,gimmick:t.gimmick||""}}
function bossTip(name){if(name.includes("マグロ"))return "3ターン周期の強攻撃。大技前に防御を厚くする。";if(name.includes("黒幕"))return "コイン奪取とエナジー減少。コインを貯め込みすぎない。";if(name.includes("冷凍庫"))return "状態異常と防御で長期戦化。鮮度が落ちる前に攻める。";return "通常より強力な行動を行う。";}
function applyRelicStart(){ if(hasRelic("old_ticket"))p.power+=1; if(hasRelic("cool_bag"))p.block+=5; if(hasRelic("wheel"))p.energy+=1; }
function setIntent(){let a=e.actions[e.intentIndex%e.actions.length];e.intent=a;if(a.startsWith("attack")){let n=+a.replace("attack","")+e.strength;n=Math.max(0,n-e.weakNext);e.intentText=`次の行動：${n}ダメージ`;}else if(a==="defend")e.intentText="次の行動：ブロック8";else if(a==="buff")e.intentText="次の行動：攻撃力+2";else if(a==="drain")e.intentText="次の行動：エナジー減少";else if(a==="coinSteal")e.intentText="次の行動：コインを奪う";else if(a.startsWith("status"))e.intentText="次の行動：状態異常を混ぜる";}
function draw(n){for(let i=0;i<n;i++){if(!p.draw.length){if(!p.discard.length)return;p.draw=shuffle(p.discard);p.discard=[];log("捨て札を山札に戻した。")}p.hand.push(p.draw.shift())}render()}
function effectiveCost(card){let d=cdef(card); if(hasRelic("calc") && playedThisTurn===2)return 0; return Math.max(0,d.cost)}
function play(i){if(game!=="battle")return; let card=p.hand[i],d=cdef(card),cost=effectiveCost(card); if(p.energy<cost){log("エナジーが足りない。");return} p.energy-=cost; p.hand.splice(i,1); playedThisTurn++; if(p.stats)p.stats.cardsPlayed++; log("「"+d.name+(card.up?"+":"")+"」を使った。"); effect(card,d); if(d.status&&hasRelic("gloves"))gainBlock(3); if(d.kind==="exhaustSelf"||d.status){p.exhaust.push(card)}else{p.discard.push(card)} if(e.hp<=0){winBattle();return} render()}
function val(card,d){return (card.up?Math.ceil(d.value*1.35)+1:d.value)}
function dmg(n){let chillPenalty=p.hand&&p.hand.some(c=>c.id==="chilled")?-1:0;let brokeBonus=hasRelic("red_ledger")&&p.coin<=5?4:0;let total=Math.max(0,Math.floor(n+p.power+(hasRelic("knife")?1:0)+chillPenalty+brokeBonus)); let b=Math.min(e.block,total); e.block-=b; let x=total-b; e.hp=Math.max(0,e.hp-x); if(p.stats)p.stats.maxDamage=Math.max(p.stats.maxDamage||0,x);log(e.name+"に"+x+"ダメージ。"); flash("enemyBox"); floatText("enemyBox","-"+x)}
function gainBlock(n){p.block+=Math.floor(n);log("ブロックを"+Math.floor(n)+"得た。")}
function effect(card,d){let v=val(card,d); switch(d.kind){
 case"damage":dmg(v);break; case"block":gainBlock(v);break; case"draw":draw(card.up?v+1:v);break; case"power":p.power+=v;log("攻撃力+"+v);break; case"weaken":e.weakNext+=v;log("敵の次の攻撃を"+v+"下げた。");setIntent();break;
 case"handDamage":dmg(p.hand.length*v);break; case"damageDraw":dmg(v);draw(d.draw+(card.up?1:0));break; case"fresh":p.fresh=Math.min(9,p.fresh+v);log("鮮度+"+v);break; case"freshDamage":dmg(p.fresh*v);break;
 case"freshDraw":draw(v+(p.fresh>=3?1:0)+(card.up?1:0));break; case"blockFresh":gainBlock(v);p.fresh=Math.min(9,p.fresh+(d.fresh||1)+(card.up?1:0));log("鮮度が上がった。");break;
 case"exhaustLeft": if(p.hand.length){let ex=p.hand.shift();p.exhaust.push(ex);log("手札左端のカードを廃棄した。")}break; case"comboDamage":dmg(v+playedThisTurn*d.bonus+(card.up?2:0));break;
 case"exhaustSelf":log("何も起きない。");break; case"spendEnergy":let spent=p.energy;p.energy=0;dmg(spent*v);break; case"energy":p.energy+=v;log("エナジー+"+v);break;
 case"blockNext":gainBlock(v);p.nextBlock+=(d.next+(card.up?3:0));log("次ターン開始時にもブロックを得る。");break; case"blockDamage":dmg(Math.floor(p.block*d.value));break;
 case"recoverDiscard": if(p.discard.length){p.hand.push(p.discard.pop());log("捨て札から1枚戻した。")}break; case"damageCoin":dmg(v);p.coin+=(d.coin||0);log("コイン+"+(d.coin||0));break;
 case"drawEnergy":draw(v);p.energy+=(d.energy||1);log("エナジー+"+(d.energy||1));break; case"multiDamage":for(let k=0;k<d.times;k++)dmg(v);break; case"powerDraw":p.power+=v;draw(d.draw||1);break;
 case"handBlock":gainBlock(v+(p.hand.length>=5?d.bonus:0));break; case"drawCoin":draw(v);p.coin+=(d.coin||0);log("コイン+"+(d.coin||0));break; case"blockHeal":gainBlock(v);heal(d.heal+(card.up?2:0));break;
 case"freshMulti":dmg(v); if(p.fresh>=4)dmg(v);break;
 case"coinSpendDamage": if(p.coin>=(d.coinCost||10)){p.coin-=d.coinCost||10;log("コインを"+(d.coinCost||10)+"C消費。");dmg(v)}else{dmg(d.fallback||8)}break;
 case"freshSpendDamage": let spentFresh=p.fresh;p.fresh=0;dmg(spentFresh*v);log("鮮度を"+spentFresh+"消費した。");break;
 case"exhaustDamage": dmg((p.exhaust?p.exhaust.length:0)*v);break;
 case"drawFresh": draw(v);p.fresh=Math.min(9,p.fresh+(d.fresh||1));log("鮮度+"+(d.fresh||1));break;
 case"coinDraw": p.coin+=v;log("コイン+"+v);draw(d.draw||1);break;
 case"comboMulti": let times=d.times+(playedThisTurn>=3?1:0);for(let k=0;k<times;k++)dmg(v);break;
 case"drawBlockIfStatus": draw(v);if(p.hand.some(c=>cdef(c).status)){gainBlock(d.block||5)}break;
 default:log("未実装効果。")
}}
function endTurn(){if(game!=="battle")return; while(p.hand.length)p.discard.push(p.hand.shift()); enemyTurn(); if(p.hp<=0){loseRun();return} p.block=hasRelic("cold_key")?Math.max(p.nextBlock,Math.floor(p.block/2)):p.nextBlock;p.nextBlock=0;let penalty=p.nextEnergyPenalty||0;p.nextEnergyPenalty=0;p.energy=Math.max(0,p.maxEnergy-penalty);turn++; if(CFG.fresh)p.fresh=Math.max(0,p.fresh-1); if(penalty>0)log("エナジー減少：このターンのエナジー-"+penalty); draw(5); render()}
function enemyTurn(){log(e.name+"の行動。");let a=e.intent;if(a.startsWith("attack")){let n=+a.replace("attack","")+e.strength;n=Math.max(0,n-e.weakNext);let b=Math.min(p.block,n);p.block-=b;let x=n-b;p.hp=Math.max(0,p.hp-x);e.weakNext=0;log(x+"ダメージを受けた。");flash("playerBox");floatText("playerBox","-"+x)}else if(a==="defend"){e.block+=8;log(e.name+"はブロック8。")}else if(a==="buff"){e.strength+=2;log(e.name+"の攻撃力+2。")}else if(a==="drain"){let drain=difficulty==="hard"?2:1;p.nextEnergyPenalty=Math.min(3,(p.nextEnergyPenalty||0)+drain);log("次ターンのエナジーが"+drain+"減る。")}else if(a==="coinSteal"){let lost=Math.min(difficulty==="hard"?25:15,p.coin);p.coin-=lost;log("コインを"+lost+"C奪われた。")}else if(a.startsWith("status")){let id=a.split(":")[1]||"hirou";p.discard.push(newCard(id)); if(difficulty==="hard"&&currentNode!=="normal")p.discard.push(newCard(id)); log(cards[id].name+"が捨て札に混ざった。"+(difficulty==="hard"&&currentNode!=="normal"?" 熟練補正でもう1枚。":""))} e.intentIndex++;setIntent()}
function winBattle(){log(e.name+"を倒した！"); if(p.stats){p.stats.kills++; if(currentNode==="elite")p.stats.elites++;} let rewardCoin=difficulty==="hard"?(currentNode==="elite"?9:3):(currentNode==="elite"?16:6); p.coin+=rewardCoin; log("戦闘報酬：コイン+"+rewardCoin); if(hasRelic("ledger")){p.coin+=12;log("帳場ノート：コイン+12")} if(hasRelic("stamp")){heal(2);log("検品印：HP2回復")}; if(currentNode==="boss"){winRun();return} showBattleResult(rewardCoin)}
function showBattleResult(rewardCoin){game="choice";let body="獲得コイン：+"+rewardCoin+"C\n残りHP："+p.hp+"/"+p.maxHp+"\n現在のデッキ枚数："+p.deck.length+"枚\n最大ダメージ："+(p.stats.maxDamage||0);clearChoice("戦闘勝利！",body);addBtn(document.getElementById("choiceBtns"),"報酬へ進む",()=>{if(currentNode==="elite"&&CFG.relic){showRelicReward()}else showCardReward()} ,"main");render()}
function showCardReward(){game="choice"; clearChoice("戦闘報酬：カードを1枚選ぶ","デッキに追加するカードを選んでください。"); let n=3+(hasRelic("armband")?1:0)+(hasRelic("glasses")?1:0); let pool=CFG.cards.filter(c=>!c.status); let picks=shuffle(pool).slice(0,n); let area=document.getElementById("choiceCards"); picks.forEach(c=>{let b=cardButton(newCard(c.id),()=>{p.deck.push(newCard(c.id));log("「"+c.name+"」を得た。");nextNodeAfterBattle()});area.appendChild(b)}); addBtn(document.getElementById("choiceBtns"),"取らずに進む：通常+10C/熟練+6C",()=>{let bonus=difficulty==="hard"?6:10;p.coin+=bonus;if(p.stats)p.stats.cardsSkipped++;if(hasRelic("reverse_market")){p.maxHp+=2;p.hp+=2;log("逆張り相場表：最大HP+2。")};if(difficulty!=="hard")heal(2);log("カードを取らず、コイン+"+bonus+"を得た。"+(difficulty!=="hard"?" HPも2回復。":""));nextNodeAfterBattle()},"sec"); render()}
function showRelicReward(){
 game="choice";clearChoice("エリート報酬を選ぶ","Ver.1.4では、レリック・強化カード・大量コインから選べます。熟練では報酬量が少し下がります。");
 let area=document.getElementById("choiceCards");
 shuffle(relicPool).slice(0,3).forEach(r=>{let b=document.createElement("button");b.className="card";b.innerHTML=`${relicArtHtml(r)}<div class="cardName">${r.name}</div><div class="tag">レリック</div><div>${r.text}</div>`;b.onclick=()=>{gainRelic(r);showCardReward()};area.appendChild(b)});
 let btns=document.getElementById("choiceBtns");
 addBtn(btns,"強化カードを得る",()=>{let pool=CFG.cards.filter(c=>!c.status);let c=rnd(pool);let obj=newCard(c.id,true);p.deck.push(obj);log("強化カード「"+c.name+"+」を得た。");showCardReward()},"sec");
 addBtn(btns,"大量コインを得る",()=>{let bonus=difficulty==="hard"?20:28;p.coin+=bonus;log("エリート追加報酬：コイン+"+bonus);showCardReward()},"sec");
 render();
}
function gainRelic(r,silent=false){if(p.relics.some(x=>x.id===r.id))return;p.relics.push(r);if(!silent)log("レリック「"+r.name+"」を得た。")}
function clearChoice(t,b){document.getElementById("choiceZone").style.display="block";document.getElementById("choiceTitle").textContent=t;document.getElementById("choiceBody").textContent=b;document.getElementById("choiceCards").innerHTML="";document.getElementById("choiceBtns").innerHTML=""}
function addBtn(parent,text,fn,cls="sec"){let b=document.createElement("button");b.className=cls==="main"?"main":"sec";b.textContent=text;b.onclick=fn;parent.appendChild(b)}
function showEvent(){if(p.stats)p.stats.events++;let ev=rnd(eventPool);clearChoice(ev.title,ev.body);let btns=document.getElementById("choiceBtns");addBtn(btns,ev.a,()=>eventEffect(ev,true),"main");addBtn(btns,ev.b,()=>eventEffect(ev,false),"sec")}
function eventEffect(ev,a){
 let results=[];
 let gainCard=(pool)=>{let c=rnd(pool);p.deck.push(newCard(c.id));results.push("カード「"+c.name+"」を得た。");};
 if(ev.effect==="rare"&&a){let loss=difficulty==="hard"?14:10;p.hp=Math.max(1,p.hp-loss);results.push("HPを"+loss+"失った。");gainCard(CFG.cards.filter(c=>!c.status));}
 else if(ev.effect==="rare"&&!a){results.push("何もせず進んだ。");}
 else if(ev.effect==="heal_or_coin"){if(a){let before=p.hp;heal(10);results.push("HPを"+(p.hp-before)+"回復した。")}else{let evc=difficulty==="hard"?8:12;p.coin+=evc;results.push("コイン+"+evc+"を得た。")}}
 else if(ev.effect==="remove_or_card"){if(a&&p.deck.length>1){let r=p.deck.shift();results.push("デッキから「"+cdef(r).name+"」を削除した。")}else{gainCard(CFG.cards.filter(c=>!c.status));}}
 else if(ev.effect==="typed_card"){let pool=CFG.cards.filter(c=>!c.status&&(a?c.type==="防御":c.type==="攻撃")); if(pool.length)gainCard(pool);}
 else if(ev.effect==="maxhp_or_fresh"){if(a){p.maxHp+=4;p.hp+=4;results.push("最大HP+4。HPも4回復した。")}else{p.deck.push(newCard("asa"));results.push("カード「朝獲れ」を得た。")}}
 else if(ev.effect==="dark_auction"){if(a){p.hp=Math.max(1,p.hp-12);results.push("HPを12失った。");gainCard(CFG.cards.filter(c=>!c.status));gainCard(CFG.cards.filter(c=>!c.status));}else{let lost=Math.min(30,p.coin);p.coin-=lost;results.push("コインを"+lost+"C失った。");gainRelic(rnd(relicPool));results.push("レリックを1つ得た。")}}
 else if(ev.effect==="paper_mountain"){if(a&&p.deck.length>1){let r=p.deck.shift();results.push("カード「"+cdef(r).name+"」を削除した。")}else{p.deck.push(newCard("hirou"));p.deck.push(newCard("hirou"));p.coin+=40;results.push("疲労2枚を得た。コイン+40C。")}}
 else if(ev.effect==="mystery_middleman"){if(a){upgradeFirst();results.push("デッキ内カードを1枚強化した。")}else{p.hp=Math.max(1,p.hp-5);if(p.deck.length>1){let r=p.deck.shift();results.push("HPを5失い、カード「"+cdef(r).name+"」を削除した。")}}}
 else if(ev.effect==="freezer_depth"){if(a){p.deck.push(newCard("chilled"));gainRelic(rnd(relicPool));results.push("冷えを1枚得たが、レリックも得た。")}else{let before=p.hp;heal(10);results.push("HPを"+(p.hp-before)+"回復した。")}}
 else if(ev.effect==="sale_day"){if(a){p.coin+=15;results.push("コイン+15C。 ")}else{p.maxHp+=2;p.hp+=2;results.push("最大HP+2。")}}
 showEventResult(ev.title,results);
}
function showEventResult(title,results){
 game="choice"; clearChoice("イベント結果："+title, results.join("\n"));
 let btns=document.getElementById("choiceBtns");
 addBtn(btns,"次へ進む",()=>nextNodeAfterBattle(),"main");
 results.forEach(r=>log("イベント結果："+r));
 render();
}
function showRest(){clearChoice("休憩","HP回復かカード強化を選べます。熟練では回復量が少なくなります。");let btns=document.getElementById("choiceBtns");addBtn(btns,"HPを回復",()=>{heal((difficulty==="hard"?12:18)+(hasRelic("amulet")?5:0));nextNodeAfterBattle()},"main"); if(CFG.upgrade)addBtn(btns,"デッキ先頭の未強化カードを強化",()=>{upgradeFirst();nextNodeAfterBattle()},"sec")}
function upgradeFirst(){let c=p.deck.find(x=>!x.up&&!cdef(x).status); if(c){c.up=true;log(cdef(c).name+"を強化した。")}else log("強化できるカードがなかった。")}
function cardPrice(c){if(c.status)return 0; if(["oomono","sashine","kaitai","odori","zenryoku","bakuhatsu","kori_reflect"].includes(c.id))return 45; if(["meiki","asa","yasune","senbetsu","katsugi","kessai"].includes(c.id))return 20; if(c.type==="攻撃")return 30; if(c.type==="防御")return 28; return 25}
function showShop(){if(p.stats)p.stats.shops++;clearChoice("店","Ver.1.7ではショップ購入・デッキ確認・熟練バランスを改善しました。カード・レリック・サービスから選べます。目利きの眼鏡がある場合は価格+5Cです。");let area=document.getElementById("choiceCards");let sold={};let priceMod=(difficulty==="hard"?10:0)+(hasRelic("glasses")?5:0);area.insertAdjacentHTML("beforeend","<div class='shopHead'>カード</div>");shuffle(CFG.cards.filter(c=>!c.status)).slice(0,4).forEach(c=>{let price=cardPrice(c)+priceMod;let cardObj=newCard(c.id);let b=cardButton(cardObj,()=>{if(sold[c.id])return;if(p.coin>=price){p.coin-=price;p.deck.push(newCard(c.id));sold[c.id]=true;log(c.name+"を"+price+"Cで購入。");b.innerHTML=b.innerHTML.replace(`価格 ${price}C`,`購入済み`);b.classList.add("disabled");b.onclick=null;}else log("コインが足りない。必要："+price+"C");render()},`価格 ${price}C`);area.appendChild(b)});area.insertAdjacentHTML("beforeend","<div class='shopHead'>レリック</div>");let relicCost=difficulty==="hard"?75:50;let rb=document.createElement("button");rb.className="card";rb.innerHTML=`<div class="cardArt relicArt" style="--art-bg1:#334155;--art-bg2:#64748b;--art-frame:#cbd5e1;"><div class="cardIcon">🎁</div><div class="cardSubIcon">?</div></div><div class="cardName">ランダムレリック</div><div class="tag">レリック</div><div>未所持レリックを1つ得る。</div><div class="price">価格 ${relicCost}C</div>`;rb.onclick=()=>{if(rb.dataset.sold==="1")return;if(p.coin>=relicCost){p.coin-=relicCost;let pool=relicPool.filter(r=>!hasRelic(r.id));if(pool.length){gainRelic(rnd(pool));rb.dataset.sold="1";rb.innerHTML=rb.innerHTML.replace(`価格 ${relicCost}C`,`購入済み`);rb.classList.add("disabled");rb.onclick=null;}else log("未所持レリックがありません。")}else log("コインが足りない。必要："+relicCost+"C");render()};area.appendChild(rb);let btns=document.getElementById("choiceBtns");btns.insertAdjacentHTML("beforeend","<div class='shopHead'>サービス</div>");let healCost=difficulty==="hard"?30:25;let healAmt=difficulty==="hard"?12:15;addBtn(btns,"HP回復 "+healCost+"C",()=>{if(p.coin>=healCost&&p.hp<p.maxHp){p.coin-=healCost;heal(healAmt)}else log("回復できない。HP満タン、または"+healCost+"C不足。");render()},"sec");addBtn(btns,"カード削除 35C",()=>{if(p.coin>=35&&p.deck.length>1){p.coin-=35;let r=p.deck.shift();log(cdef(r).name+"を削除。")}else log("削除できない。必要：35C");render()},"sec");addBtn(btns,"カード強化 35C",()=>{if(p.coin>=35){p.coin-=35;upgradeFirst()}else log("コインが足りない。必要：35C");render()},"sec");addBtn(btns,"状態異常削除 20C",()=>{let zones=[p.deck,p.draw,p.discard,p.hand];let removed=null;for(let z of zones){let idx=z.findIndex(c=>cdef(c).status);if(idx>=0){removed=z.splice(idx,1)[0];break;}}if(p.coin>=20&&removed){p.coin-=20;log(cdef(removed).name+"を削除。")}else{if(removed){p.deck.push(removed)}log("削除できない。状態異常がない、または20C不足。");}render()},"sec");addBtn(btns,"店を出る",()=>nextNodeAfterBattle(),"main")}
function heal(n){let before=p.hp;p.hp=Math.min(p.maxHp,p.hp+n);log("HPを"+(p.hp-before)+"回復。")}
function previewText(card,d){let base="";let v=val(card,d); if(["damage","damageDraw","comboDamage","multiDamage","freshMulti"].includes(d.kind)){base="現在目安: "+Math.max(0,Math.floor(v+p.power+(hasRelic("knife")?1:0)))+"ダメージ"}else if(d.kind==="freshDamage"){base="現在目安: "+Math.max(0,Math.floor(p.fresh*v+p.power+(hasRelic("knife")?1:0)))+"ダメージ"}else if(d.kind==="block"){base="現在目安: ブロック"+v}else if(d.kind==="blockFresh"){base="現在目安: ブロック"+v+" / 鮮度+"+((d.fresh||1)+(card.up?1:0))} return (card.up?`<div class="now">強化済み：効果量アップ</div>`:"") + (base?`<div class="now">${base}</div>`:"")
}
function cardButton(card,fn,extra="",disabled=false){let d=cdef(card),b=document.createElement("button");let isDisabled=disabled||(p.energy<effectiveCost(card)&&game==="battle");b.className="card type-"+d.type+(isDisabled?" disabled":"");let statusNote=d.status?'<div class="now">邪魔カード：使うと戦闘中だけ廃棄されます</div>':"";b.innerHTML=`${cardArtHtml(card)}<div class="cost">${effectiveCost(card)}</div><div class="cardName">${d.name}${card.up?'<span class="up">+</span>':''}</div><div class="tag">${d.type}</div><div>${d.text}</div>${statusNote}${previewText(card,d)}${extra?`<div class="price">${extra}</div>`:""}`;b.onclick=isDisabled?null:fn;return b}
function render(){if(!p)return;document.getElementById("php").textContent=`${p.hp}/${p.maxHp}`;document.getElementById("pbar").style.width=(p.hp/p.maxHp*100)+"%";document.getElementById("pblock").textContent=p.block;document.getElementById("energy").textContent=`${p.energy}/${p.maxEnergy}`;document.getElementById("fresh").textContent=CFG.fresh?p.fresh:"-";document.getElementById("coin").textContent=CFG.shop?p.coin:"-";document.getElementById("turn").textContent=turn||"-";document.getElementById("progress").textContent=`${step}/${CFG.battleCount}`;document.getElementById("draw").textContent=p.draw.length;document.getElementById("discard").textContent=p.discard.length;document.getElementById("relics").innerHTML=p.relics.map((r,i)=>{let art=relicArtOf(r);return `<span class="relic relicIcon" title="${r.name}：${r.text}" onclick="relicInfo(${i})" style="${artStyle(art)}"><span class="relicEmoji">${art.icon}</span><span>${r.name}</span></span>`}).join("");document.getElementById("mapline").textContent=mapLine();
 if(e){document.getElementById("ename").textContent=e.name;document.getElementById("ehp").textContent=`${e.hp}/${e.maxHp}`;document.getElementById("ebar").style.width=(e.hp/e.maxHp*100)+"%";document.getElementById("eblock").textContent=e.block;document.getElementById("intent").textContent=e.intentText; const ib=document.getElementById("intentBig"); if(ib)ib.textContent=e.intentText||"-";}
 let hand=document.getElementById("hand");hand.innerHTML="";p.hand.forEach((c,i)=>hand.appendChild(cardButton(c,()=>play(i))));document.getElementById("endBtn").disabled=game!=="battle"}
function relicInfo(i){let r=p.relics[i]; if(r)log(r.name+"："+r.text)}
function mapLine(){let arr=[];for(let i=1;i<=CFG.battleCount;i++){arr.push(i<step?"●":i===step?"◎":i===CFG.battleCount?"BOSS":"○")}return arr.join(" → ")}
function deckText(){
 let counts={};p.deck.forEach(c=>{let d=cdef(c);let k=d.name+(c.up?"+":"");if(!counts[k])counts[k]={count:0,type:d.type,status:!!d.status};counts[k].count++;});
 return "現在のデッキ枚数："+p.deck.length+"枚\n\n"+Object.entries(counts).sort((a,b)=>a[1].type.localeCompare(b[1].type)).map(([name,obj])=>`${name} × ${obj.count} / ${obj.type}${obj.status?" / 状態異常":""}`).join("\n");
}
function showDeck(){
 if(!p)return;
 if(game!=="battle"){
   alert(deckText());
   log("選択画面中のデッキ確認はポップアップで表示しました。");
   return;
 }
 let prev=game;game="deck";clearChoice("デッキ確認","現在のデッキ枚数："+p.deck.length+"枚。強化済み・状態異常もここで確認できます。");let area=document.getElementById("choiceCards");let counts={};p.deck.forEach(c=>{let d=cdef(c);let k=d.name+(c.up?"+":"");if(!counts[k])counts[k]={count:0,type:d.type,status:!!d.status};counts[k].count++;});Object.entries(counts).sort((a,b)=>a[1].type.localeCompare(b[1].type)).forEach(([name,obj])=>{let div=document.createElement("div");div.className="miniCard";div.innerHTML=`<b>${name}</b><br><span class="tag">${obj.type}</span><br>枚数：${obj.count}${obj.status?"<br>状態異常カード":""}`;area.appendChild(div)});addBtn(document.getElementById("choiceBtns"),"閉じる",()=>{document.getElementById("choiceZone").style.display="none";game=prev;render()},"main");render()}
function resultSummary(clear){let rank=clear?(difficulty==="hard"?"S":"A"):"D";return (clear?(difficulty==="hard"?"熟練モードを制覇しました。":"競り札の迷宮を制覇しました。"):"迷宮の奥で力尽きました。")+"\n\n評価ランク："+rank+"\n最終HP："+p.hp+"/"+p.maxHp+"\n最終コイン："+p.coin+"C\nデッキ枚数："+p.deck.length+"枚\n獲得レリック："+p.relics.length+"個\n撃破数："+(p.stats?p.stats.kills:0)+"\nエリート撃破："+(p.stats?p.stats.elites:0)+"\n最大ダメージ："+(p.stats?p.stats.maxDamage:0)+"\n使用カード枚数："+(p.stats?p.stats.cardsPlayed:0)}
function winRun(){saveAppStats(true,true);game="end";document.getElementById("choiceZone").style.display="none";document.getElementById("resultTitle").textContent="クリア！";let el=document.getElementById("resultText");el.className="resultBox";el.textContent=resultSummary(true);document.getElementById("result").style.display="block";render()}
function loseRun(){saveAppStats(false,false);game="end";document.getElementById("choiceZone").style.display="none";document.getElementById("resultTitle").textContent="ゲームオーバー";let advice=p.deck.filter(c=>cdef(c).type==="防御").length<4?"防御カードが少なめでした。":"エリートやボス前の休憩判断を見直すと改善できます。";let el=document.getElementById("resultText");el.className="resultBox";el.textContent=resultSummary(false)+"\n\n次回の助言："+advice;document.getElementById("result").style.display="block";render()}
showTitle();

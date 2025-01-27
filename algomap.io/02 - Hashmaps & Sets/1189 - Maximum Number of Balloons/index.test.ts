import { describe, expect, test } from "bun:test";

import { maxNumberOfBalloons } from ".";

describe("1189 - Maximum Number of Ballons", () => {
  test("should identify if two strings are valid anagrams", () => {
    expect(maxNumberOfBalloons("nlaebolko")).toEqual(1);
    expect(maxNumberOfBalloons("loonbalxballpoon")).toEqual(2);
    expect(maxNumberOfBalloons("leetcode")).toEqual(0);
    expect(
      maxNumberOfBalloons(
        "krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw"
      )
    ).toEqual(10);
  });
});

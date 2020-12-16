'use strict';

const getData = async () => {

  const rules = [
    'departure location: 26-404 or 427-951',
    'departure station: 43-307 or 325-967',
    'departure platform: 39-383 or 399-950',
    'departure track: 31-157 or 178-969',
    'departure date: 28-109 or 135-950',
    'departure time: 38-622 or 631-958',
    'arrival location: 35-61 or 69-957',
    'arrival station: 36-216 or 241-951',
    'arrival platform: 41-586 or 606-967',
    'arrival track: 47-573 or 586-951',
    'class: 31-439 or 445-957',
    'duration: 35-925 or 939-965',
    'price: 41-473 or 494-952',
    'route: 45-742 or 754-963',
    'row: 41-338 or 357-952',
    'seat: 45-848 or 873-968',
    'train: 37-183 or 197-952',
    'type: 46-509 or 522-974',
    'wagon: 32-69 or 81-967',
    'zone: 37-759 or 780-967',
  ];

  const myTicket = '103,197,83,101,109,181,61,157,199,137,97,179,151,89,211,59,139,149,53,107';

  const otherTickets = [
    "209,822,916,528,93,531,551,797,387,835,278,464,546,945,732,88,678,145,559,287",
    "361,364,272,676,683,606,911,903,890,600,784,669,894,428,741,92,735,276,142,836",
    "781,526,892,684,272,536,918,9,402,546,925,824,201,502,688,432,613,809,713,374",
    "524,557,363,240,554,371,58,801,96,156,449,454,573,903,365,833,632,258,785,941",
    "924,802,727,547,447,674,251,212,359,180,620,4,257,525,403,94,181,844,547,569",
    "107,673,817,281,543,800,59,557,739,570,891,216,149,105,728,649,86,336,464,933",
    "148,264,782,50,901,752,706,287,61,617,300,100,538,540,563,145,816,180,686,461",
    "781,256,535,203,24,213,804,817,145,304,924,895,890,794,199,739,734,200,400,899",
    "84,501,93,782,494,226,88,902,843,795,674,732,509,890,182,716,358,298,367,925",
    "331,82,617,102,684,545,296,878,409,887,820,181,182,875,242,907,294,428,787,714",
    "899,780,543,561,523,633,284,457,695,528,301,676,799,921,105,865,465,798,759,813",
    "203,614,843,657,791,669,453,541,854,845,209,841,806,292,105,338,694,259,698,248",
    "289,946,635,736,890,494,656,665,813,736,884,341,253,758,437,281,153,104,915,817",
    "662,897,901,104,283,731,56,655,730,204,345,542,381,641,201,297,375,806,524,565",
    "462,380,736,528,90,471,401,676,203,88,766,61,372,264,50,253,428,823,547,793",
    "381,108,787,569,711,737,879,569,803,483,277,684,463,908,526,820,368,282,366,92",
    "899,502,307,906,876,845,205,241,839,686,438,624,616,633,427,738,651,531,295,908",
    "690,638,275,216,94,5,608,141,611,615,808,247,470,292,634,829,503,833,278,505",
    "207,147,608,459,570,698,813,473,290,741,216,716,641,948,759,85,860,401,679,797",
    "241,666,345,243,51,670,83,680,842,152,251,571,279,527,635,833,549,140,906,542",
    "205,809,716,704,556,638,306,56,473,893,631,886,437,649,90,712,710,894,453,627",
    "566,61,545,208,523,550,822,700,204,57,744,947,82,555,91,613,252,377,365,820",
    "296,653,873,433,830,922,288,805,786,714,656,530,364,284,691,978,242,881,404,326",
    "553,643,614,815,448,533,902,507,324,380,879,255,898,682,876,738,713,642,665,447",
    "213,880,934,434,818,522,55,740,210,543,145,427,783,96,454,289,382,245,141,821",
    "810,910,647,935,468,52,721,330,457,509,103,890,293,280,612,642,683,669,787,281",
    "842,793,338,716,59,794,638,512,360,402,802,573,96,740,148,659,372,615,471,708",
    "334,608,522,553,137,138,277,870,305,529,85,383,149,657,95,637,270,431,179,681",
    "838,546,797,535,801,375,697,732,469,370,249,662,509,351,263,366,327,641,890,793",
    "571,651,661,456,697,706,831,464,639,731,363,533,702,498,296,635,379,924,328,110",
    "648,792,765,251,252,572,656,563,873,89,736,731,256,947,885,104,140,755,876,734",
    "546,642,781,697,923,394,711,358,255,246,793,532,566,268,526,783,708,830,819,568",
    "462,781,495,82,473,453,730,388,806,660,258,796,335,780,247,283,653,57,620,890",
    "652,245,136,795,281,464,662,250,730,101,684,2,273,379,96,783,738,543,255,811",
    "434,151,794,468,399,98,284,254,302,909,561,886,135,386,206,431,719,336,833,281",
    "567,276,378,731,726,342,612,908,650,432,501,689,641,274,140,58,470,212,815,250",
    "137,711,337,540,837,647,912,818,371,23,427,946,648,569,250,814,460,146,333,434",
    "727,654,328,148,337,648,659,848,284,378,103,851,568,473,633,784,298,758,819,941",
    "150,810,456,537,877,839,531,916,643,825,784,908,430,987,708,948,210,571,332,298",
    "98,399,106,462,528,554,151,98,439,806,505,874,757,695,333,391,648,700,619,689",
    "525,841,432,535,797,497,208,908,539,427,851,446,729,505,895,839,813,210,538,788",
    "155,149,716,606,82,903,453,274,299,607,795,292,548,533,227,148,527,99,586,713",
    "801,742,879,714,786,464,987,713,360,698,643,53,541,105,260,261,717,728,717,612",
    "105,57,90,815,939,908,92,940,620,62,529,831,261,873,694,719,94,470,50,465",
    "611,836,83,548,469,938,548,680,207,823,498,205,696,701,572,376,944,830,652,95",
    "466,719,335,434,93,883,449,314,739,649,433,290,742,901,735,472,338,337,198,376",
    "977,97,447,360,729,538,307,524,557,282,731,836,800,675,885,549,841,903,632,821",
    "259,699,94,261,667,586,524,180,808,469,576,672,681,947,697,917,804,468,370,435",
    "689,785,180,877,453,150,700,498,249,500,755,845,361,605,274,268,151,200,814,150",
    "823,920,736,64,826,157,636,831,496,297,893,689,278,915,899,837,568,465,404,202",
    "663,722,210,709,289,526,567,216,101,242,917,18,381,333,566,541,573,143,572,54",
    "734,616,621,704,736,583,437,684,501,657,565,643,641,96,200,258,463,561,563,640",
    "499,837,260,96,711,880,882,447,457,228,507,677,284,670,733,823,274,289,286,539",
    "636,571,905,137,452,718,379,811,249,69,411,823,268,401,874,87,69,921,828,271",
    "276,105,285,754,457,635,738,99,439,183,816,253,674,247,944,143,207,54,199,994",
    "709,430,371,901,895,486,896,374,724,703,617,328,559,692,899,379,306,296,242,567",
    "466,215,471,431,844,54,382,87,93,756,655,259,379,872,615,400,264,366,211,85",
    "788,688,148,807,144,374,360,270,460,672,52,391,534,888,437,363,796,197,280,471",
    "717,548,525,622,797,303,247,704,328,606,53,810,381,812,462,671,380,797,983,658",
    "204,725,99,945,912,831,759,812,757,141,159,816,245,57,827,663,472,430,59,798",
    "465,638,264,359,542,93,638,599,151,149,210,732,247,873,891,262,96,431,642,902",
    "89,558,716,291,466,242,507,359,884,16,374,358,813,808,371,818,254,922,722,798",
    "212,505,372,691,455,683,438,886,200,701,554,372,945,537,821,261,725,740,781,395",
    "653,907,672,473,338,362,109,939,254,157,382,365,670,572,706,160,903,656,56,894",
    "894,81,908,651,781,521,837,908,378,244,947,154,675,289,708,925,680,618,637,652",
    "305,657,439,117,678,287,430,632,199,840,297,920,890,829,609,645,291,286,667,922",
    "803,154,52,825,157,945,739,146,921,332,844,109,239,657,821,156,461,669,919,704",
    "211,506,826,282,213,278,795,208,363,258,277,109,531,60,590,822,697,646,359,898",
    "680,707,13,151,366,651,430,709,274,715,891,254,201,445,917,291,179,259,794,454",
    "606,458,104,457,648,281,359,538,136,139,900,369,833,614,272,197,838,567,678,597",
    "708,718,823,282,932,157,241,376,914,265,711,380,105,821,795,665,555,642,663,636",
    "632,909,307,612,463,740,380,700,782,834,296,202,457,778,93,295,672,615,557,683",
    "668,211,664,504,455,533,494,338,943,525,996,670,452,544,701,210,675,298,833,300",
    "280,643,824,549,681,241,526,282,627,566,271,469,155,99,466,460,51,305,434,137",
    "902,546,530,325,109,796,543,209,894,883,227,673,800,335,621,798,557,215,912,536",
    "696,640,712,615,473,412,294,279,268,302,552,635,401,722,55,925,737,84,368,151",
    "571,294,197,921,294,843,359,97,62,691,447,639,706,572,706,539,563,946,941,294",
    "689,374,785,401,496,360,817,698,218,758,924,831,89,562,755,248,564,302,301,732",
    "672,89,502,893,560,183,929,469,553,99,714,305,272,689,701,734,873,502,798,534",
    "102,197,528,332,643,468,635,53,690,287,383,682,591,338,258,891,664,798,741,299",
    "902,470,667,500,806,464,197,51,694,83,673,267,508,181,788,921,148,882,977,739",
    "940,891,818,883,672,855,759,401,828,335,692,651,377,182,828,759,693,215,179,139",
    "610,565,289,687,848,939,810,359,338,910,948,318,494,470,667,786,919,329,215,653",
    "371,949,271,207,294,289,337,329,365,216,688,180,525,243,684,404,102,403,236,60",
    "781,361,649,500,276,672,818,944,553,95,878,803,335,365,250,994,277,883,447,719",
    "502,839,382,374,895,377,910,292,876,701,144,929,198,684,463,827,103,542,93,692",
    "59,256,83,728,567,529,626,882,759,704,106,209,784,556,874,610,94,815,715,780",
    "283,399,359,701,244,735,845,453,557,549,893,758,636,685,657,990,146,842,400,244",
    "617,88,825,249,499,885,547,274,434,332,99,153,880,216,508,472,880,565,12,566",
    "875,737,610,447,917,91,500,561,619,461,301,256,928,718,659,108,910,892,254,614",
    "337,573,942,846,638,530,154,929,833,83,828,526,884,726,825,141,428,837,253,692",
    "54,20,363,216,496,325,306,671,921,525,714,304,87,638,277,663,703,180,530,669",
    "619,742,180,81,674,877,901,463,737,825,641,695,666,794,881,637,55,849,671,452",
    "90,614,277,136,646,375,318,99,145,810,814,817,807,197,802,435,741,679,145,87",
    "328,284,948,18,157,610,499,453,646,92,508,833,279,275,542,884,549,498,803,455",
    "721,651,253,368,387,182,915,404,818,141,659,821,91,654,293,544,739,685,782,428",
    "620,658,51,876,820,698,357,104,796,83,379,775,887,466,285,246,244,879,812,657",
    "949,278,157,156,498,377,908,555,494,374,920,797,95,840,502,127,151,838,381,848",
    "875,445,541,257,914,873,639,846,292,333,565,523,524,737,216,847,824,467,60,343",
    "501,60,616,942,338,783,453,235,242,689,81,91,685,435,918,265,647,757,839,689",
    "146,272,902,716,880,718,486,299,664,250,911,877,326,378,366,147,606,915,560,826",
    "661,882,285,400,448,683,402,834,678,752,718,632,876,802,259,794,705,326,943,647",
    "377,709,550,267,60,553,506,648,469,896,991,670,50,465,551,646,888,829,369,332",
    "989,806,884,373,809,656,298,215,156,522,645,468,55,499,816,881,249,833,756,808",
    "267,652,371,140,810,646,564,677,637,328,733,258,58,818,732,706,459,758,990,715",
    "670,373,880,697,819,74,451,612,837,297,561,887,914,657,844,242,60,541,501,95",
    "642,691,684,392,432,546,402,886,464,682,178,566,729,537,204,641,842,505,723,666",
    "792,542,218,268,247,898,182,428,944,453,796,450,914,552,909,535,97,922,718,698",
    "755,804,908,533,377,531,942,68,465,645,108,303,57,83,247,298,290,661,619,155",
    "346,302,383,828,268,365,378,817,289,299,287,922,373,618,372,257,563,946,586,522",
    "84,608,390,530,55,266,825,635,545,258,335,53,338,568,534,247,365,502,455,274",
    "253,889,246,499,250,459,211,894,683,268,734,526,675,321,257,642,550,692,839,298",
    "153,465,90,83,372,737,717,329,700,98,373,686,103,429,357,272,989,700,874,669",
    "846,683,673,781,692,823,177,273,660,792,563,672,737,675,146,507,198,507,694,562",
    "634,248,890,840,606,714,103,770,655,206,810,668,685,876,656,657,464,639,833,471",
    "791,294,693,81,201,758,386,822,757,565,734,457,741,717,264,733,247,264,243,883",
    "262,399,792,465,153,182,251,348,699,404,647,733,563,908,271,847,848,891,286,265",
    "889,471,500,261,462,659,216,711,347,246,925,913,826,530,608,366,755,651,815,670",
    "329,197,56,437,261,553,466,455,723,246,549,800,213,618,874,556,994,692,679,941",
    "807,54,285,265,904,757,784,787,610,699,258,460,852,874,97,464,532,797,915,500",
    "661,545,887,571,205,212,307,729,104,426,704,544,780,715,359,108,662,243,287,465",
    "916,140,692,532,695,891,369,275,551,500,516,198,684,215,832,713,648,502,876,831",
    "531,103,563,476,257,789,825,276,782,610,54,526,545,550,784,643,654,201,332,304",
    "373,244,333,505,803,456,368,878,98,546,565,2,924,702,278,704,681,916,435,373",
    "936,916,663,288,921,364,251,682,694,293,695,830,270,105,154,791,259,620,501,693",
    "695,940,93,724,82,178,689,106,732,296,381,281,694,367,699,831,788,700,865,252",
    "892,470,246,276,908,64,371,669,284,143,586,907,829,54,907,725,331,209,287,612",
    "280,889,977,505,206,782,887,948,699,88,904,875,465,503,149,500,259,399,569,294",
    "656,682,277,433,542,452,462,211,359,497,278,889,949,156,286,102,938,59,791,798",
    "912,909,294,541,202,335,428,563,55,798,93,197,795,740,636,919,814,364,651,237",
    "525,663,179,613,798,102,727,383,300,468,313,544,461,459,205,679,502,99,912,642",
    "336,643,283,143,636,203,561,289,670,138,429,839,472,672,351,812,107,399,893,400",
    "674,610,539,922,237,572,732,449,924,606,55,759,711,374,438,261,642,473,157,786",
    "718,338,496,247,662,757,337,528,168,399,622,609,208,910,675,949,700,914,729,85",
    "846,846,800,815,949,507,888,13,833,81,833,101,61,53,730,242,102,631,908,55",
    "844,371,81,3,825,844,183,614,742,280,569,848,561,207,535,946,523,399,571,806",
    "793,923,685,637,946,302,646,454,937,781,381,214,695,214,660,884,152,83,654,205",
    "634,895,738,632,522,648,875,713,946,251,180,299,100,784,296,289,11,899,470,182",
    "834,634,692,911,466,15,732,924,522,501,242,451,357,553,944,648,263,889,537,664",
    "718,306,941,878,653,294,894,529,94,510,467,728,98,742,942,693,463,732,139,910",
    "563,724,901,722,543,949,127,791,917,897,697,253,335,640,297,88,920,428,198,454",
    "780,691,458,732,787,684,82,299,564,835,87,407,433,427,468,701,650,792,295,145",
    "294,97,646,447,856,702,706,462,216,364,846,502,525,948,569,380,83,212,435,570",
    "504,703,363,834,135,402,494,625,892,371,569,723,641,154,673,141,801,298,841,569",
    "211,609,790,898,921,436,369,782,898,639,907,733,732,848,860,327,60,437,542,717",
    "838,657,303,246,848,680,615,296,466,263,595,50,726,553,570,338,202,818,451,296",
    "879,834,291,872,544,676,381,564,215,472,697,834,903,721,690,260,209,608,815,647",
    "97,886,496,787,545,666,335,704,457,771,307,845,662,837,723,92,790,560,648,284",
    "458,639,828,413,327,726,902,721,199,216,719,635,432,214,149,754,83,445,272,374",
    "688,563,106,883,712,535,732,113,894,256,450,494,691,205,890,833,803,723,457,328",
    "735,244,255,19,898,376,183,720,434,529,889,607,759,718,156,54,183,796,522,635",
    "698,739,367,177,698,58,688,533,809,889,733,815,781,403,527,450,618,889,60,104",
    "336,810,467,211,893,885,435,281,705,113,249,370,327,462,266,826,703,809,691,784",
    "757,798,216,153,809,149,96,536,450,332,676,261,569,229,501,722,200,634,247,796",
    "739,638,660,748,785,793,84,83,527,910,508,555,306,57,150,693,618,59,843,711",
    "294,787,656,946,691,325,432,333,452,373,901,604,361,439,59,286,813,840,700,244",
    "870,400,208,250,620,466,609,640,713,96,612,690,211,756,380,815,553,453,85,808",
    "60,272,608,846,704,728,839,903,83,361,717,673,797,787,778,790,889,504,614,704",
    "10,674,455,883,205,653,636,740,834,607,651,333,947,445,498,531,792,616,214,368",
    "399,548,157,366,757,731,536,305,199,650,828,303,607,811,4,816,539,940,456,709",
    "137,267,804,560,797,200,302,875,619,629,95,886,568,671,874,448,278,463,539,670",
    "676,798,812,643,208,775,180,294,921,548,949,86,261,641,888,143,702,788,306,899",
    "619,458,900,581,249,334,107,207,681,621,203,380,569,759,652,446,360,297,50,829",
    "528,699,289,690,823,676,674,509,466,730,902,608,305,211,737,638,617,681,700,761",
    "84,651,447,72,381,874,331,296,502,87,257,288,506,108,783,152,329,252,809,737",
    "672,921,155,332,348,533,898,399,616,664,472,293,201,216,61,729,657,722,648,814",
    "839,677,796,203,359,470,449,91,689,869,92,60,838,550,255,713,662,141,180,199",
    "709,274,439,827,785,294,199,495,260,671,198,15,470,379,671,877,713,756,609,303",
    "277,536,312,655,504,634,468,285,734,728,256,899,109,586,433,820,106,782,918,266",
    "100,608,947,780,817,721,209,99,652,60,610,297,203,936,790,568,570,799,918,290",
    "787,889,652,282,618,456,622,732,287,156,385,733,460,279,889,379,897,693,573,784",
    "466,922,683,644,99,121,835,615,97,754,945,494,947,888,156,273,613,909,333,210",
    "233,54,631,836,921,536,886,210,873,733,941,51,332,665,568,292,329,363,383,710",
    "924,262,381,939,458,148,138,57,143,364,888,997,641,820,942,261,940,820,249,733",
    "451,96,613,904,293,554,54,758,692,782,357,560,986,944,946,833,293,706,695,210",
    "471,897,434,85,241,107,918,640,606,199,464,786,740,106,942,907,238,205,813,282",
    "804,373,607,639,845,506,675,946,828,434,669,553,710,420,739,705,696,754,799,299",
    "718,501,259,662,434,107,213,484,546,286,206,617,472,533,470,154,643,921,211,360",
    "280,820,897,654,157,890,105,791,214,657,358,720,60,795,873,889,468,786,265,993",
    "147,719,730,730,466,530,827,826,788,801,446,219,808,707,360,102,464,552,897,812",
    "294,94,241,268,875,266,923,735,379,705,466,687,90,495,879,354,722,692,947,841",
    "180,95,690,461,142,561,379,101,283,676,650,247,471,509,846,931,548,700,538,522",
    "451,466,674,145,434,296,654,551,503,289,372,381,586,917,89,589,734,886,371,246",
    "715,754,758,147,638,299,895,833,833,398,940,54,100,524,546,57,241,373,455,702",
    "572,703,529,280,399,818,255,537,403,806,264,298,759,908,142,423,494,639,915,741",
    "403,82,814,355,183,823,893,364,881,733,368,815,738,614,505,497,550,146,875,896",
    "367,832,911,287,178,573,93,683,924,291,286,558,178,841,333,623,569,670,724,836",
    "810,571,87,917,758,994,51,104,534,337,681,572,559,256,879,917,293,304,917,458",
    "571,815,871,302,831,822,881,791,724,713,568,638,798,333,278,60,246,606,714,104",
    "555,712,567,837,136,553,642,19,208,616,712,893,363,325,303,531,631,789,501,813",
    "150,379,138,381,434,785,823,648,357,912,128,435,573,638,888,360,730,284,636,565",
    "671,198,93,382,527,915,263,712,253,935,267,816,453,682,527,538,399,663,886,151",
    "742,83,329,627,509,631,799,371,893,206,365,455,182,635,534,455,372,465,684,838",
    "643,896,898,873,873,796,438,448,402,540,626,685,939,672,435,209,459,495,282,729",
    "257,563,832,831,552,607,218,148,279,381,555,667,657,369,942,57,558,149,689,897",
    "208,683,569,259,978,674,697,836,215,215,140,361,714,691,940,199,57,445,302,712",
    "208,618,563,616,777,359,671,289,300,672,665,917,619,635,528,898,639,213,895,98",
    "278,781,547,307,371,787,920,215,631,925,880,565,268,361,616,891,881,643,144,321",
    "538,645,728,763,211,677,690,916,373,649,212,436,371,292,268,373,380,438,948,507",
    "257,757,917,656,560,782,664,546,925,265,795,494,647,151,531,101,534,1,613,432",
    "334,669,818,524,887,329,375,792,669,328,784,813,494,697,447,524,890,360,399,418",
    "837,554,677,816,622,534,720,893,883,255,912,712,341,291,687,890,400,921,101,819",
    "740,531,292,271,816,727,371,696,590,272,270,562,544,179,817,498,147,946,881,611",
    "616,647,847,824,845,535,700,281,153,642,478,281,197,468,447,204,908,877,550,664",
    "755,494,271,838,108,591,58,841,245,721,90,463,714,561,875,156,542,541,267,150",
    "366,757,681,946,548,533,135,896,507,359,824,282,15,638,305,780,640,827,781,798",
    "827,686,639,525,672,921,573,275,883,375,733,910,545,101,996,277,827,900,288,901",
    "254,685,548,723,729,507,100,917,763,332,634,89,404,572,690,788,921,559,839,137",
    "662,287,204,311,468,947,919,709,664,357,52,637,690,910,894,633,373,459,457,89",
    "652,434,365,754,757,626,720,642,277,85,289,664,559,213,148,813,826,504,821,157",
    "666,888,545,759,107,883,17,462,58,264,537,877,913,462,887,198,362,58,106,691",
    "101,216,650,250,328,559,854,834,622,655,447,54,946,799,727,660,705,137,95,610",
    "296,453,724,512,296,536,921,399,884,617,821,506,61,830,280,456,536,203,562,727",
    "844,561,634,452,806,607,495,107,813,147,927,848,809,879,247,705,705,707,742,136",
    "839,791,504,528,631,607,633,498,305,834,277,382,724,268,787,816,18,361,918,448",
    "716,375,438,789,250,725,886,543,275,2,523,370,108,848,897,614,60,757,911,666",
    "291,790,472,727,560,313,276,54,93,612,92,915,103,794,676,152,267,915,298,334",
    "692,547,107,188,293,83,215,69,461,939,757,244,723,632,84,754,524,451,535,403",
    "665,644,5,672,719,561,379,54,645,701,430,621,613,675,703,662,916,907,831,805",
    "288,496,724,326,305,460,714,329,839,163,829,728,638,672,450,920,286,783,543,429",
    "726,243,522,144,452,158,295,182,359,368,892,689,362,147,783,943,307,914,288,706",
    "102,434,292,617,876,57,666,524,299,258,151,462,645,919,109,533,197,4,454,542",
    "911,907,564,632,803,211,707,901,708,340,556,255,781,135,404,268,375,671,526,338",
    "802,448,451,735,99,669,349,722,609,783,429,298,692,918,642,274,135,284,428,54",
    "661,427,600,837,273,572,801,790,945,674,832,277,529,759,539,794,361,790,383,835",
    "453,537,875,203,536,246,586,453,484,330,60,642,295,328,207,494,216,668,919,373",
    "680,673,923,785,137,648,590,495,100,105,471,109,914,877,500,557,383,523,522,631",
    "534,819,694,647,691,367,468,545,689,837,64,810,146,613,909,252,756,736,690,251",
    "757,367,662,199,947,109,200,813,428,694,737,692,429,137,689,319,700,844,97,648",
    "662,803,618,178,85,295,711,259,652,717,94,893,616,139,438,779,651,885,264,357",
    "570,264,105,334,450,841,568,643,845,449,883,949,434,682,820,459,672,844,617,864",
    "531,98,150,466,921,812,464,175,260,697,278,643,876,687,914,60,61,439,297,508",
    "876,438,837,681,615,327,409,216,703,206,370,362,680,95,804,894,531,716,302,617",
    "802,366,211,532,556,791,551,999,876,336,543,281,538,181,836,109,208,556,903,270",
    "94,731,528,593,507,919,330,665,543,329,700,705,59,288,654,681,884,59,891,925",
    "531,153,759,828,242,331,835,438,612,539,631,455,616,306,985,800,826,102,725,358",
    "538,214,780,453,692,844,797,921,814,797,638,666,211,506,359,235,907,642,137,687",
    "364,525,458,179,694,568,153,197,181,461,361,293,18,888,942,699,253,290,728,718",
    "718,208,730,721,733,90,445,416,361,85,844,787,463,272,713,714,690,336,198,757",
    "105,704,302,610,947,608,544,731,264,817,719,873,740,559,927,921,277,436,820,689",
    "209,742,656,473,151,430,375,456,731,647,848,673,272,93,824,102,983,504,812,377",
    "498,898,94,707,607,826,756,471,129,466,844,915,251,789,566,506,471,873,285,652",
    "788,281,57,430,822,90,764,523,294,327,882,181,377,819,611,87,282,361,820,498",
    "381,450,892,826,603,710,670,281,399,841,274,284,675,845,805,688,613,263,673,273",
    "671,563,276,372,108,946,263,245,688,313,439,203,699,148,360,454,290,755,687,55",
  ]

  return {
    rules,
    myTicket,
    otherTickets
  };

  // return {
  //   rules: [
  //     "class: 0-1 or 4-19",
  //     "row: 0-5 or 8-19",
  //     "seat: 0-13 or 16-19",
  //   ],
  //   myTicket: "11,12,13",
  //   otherTickets: [
  //     "3,9,18",
  //     "15,1,5",
  //     "5,14,9"
  //   ]
  // }
};


module.exports = getData; 
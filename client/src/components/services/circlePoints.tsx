import { Text } from "../../types";
interface ICircleProps {
  tags: Text[] | null;
  align: boolean;
}

export default function CirclePoints({ tags, align }: ICircleProps) {
  if (!tags) return null;
  if (tags.length === 0) return null;
  const tagsLengthThree = tags.length === 3;
  return (
    <div>
      {align ? (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1344.94 414.69"
          className="h-[45vh] sm:h-[60vh] md:h-[80vh] w-max"
        >
          <switch>
            <g>
              <path
                className="fill-none stroke-yellow stroke-1"
                d="M106.8,204.96c0,92.56-74.43,167.43-166.03,167.43s-166.03-74.87-166.03-167.43S-150.83,37.53-59.23,37.53,106.8,112.4,106.8,204.96Z"
              />
              <g>
                <circle
                  className="fill-yellow"
                  cx="30.24"
                  cy="62.35"
                  r="4.89"
                />
                <text
                  className="font-roboto text-xs font-light fill-yellow"
                  transform="translate(58.26 67.24)"
                >
                  {tags[0].text}
                </text>
              </g>
              {!tagsLengthThree && (
                <g>
                  <circle
                    className="fill-yellow"
                    cx="84.78"
                    cy="120.81"
                    r="4.89"
                  />
                  <text
                    className="font-roboto text-xs font-light fill-yellow"
                    transform="translate(112.8 125.7)"
                  >
                    {tags[1].text}
                  </text>
                </g>
              )}
              <g>
                <circle
                  className="fill-yellow"
                  cx="106.67"
                  cy="195.12"
                  r="4.89"
                />
                <text
                  className="font-roboto text-xs font-light fill-yellow"
                  transform="translate(134.69 200.01)"
                >
                  {tagsLengthThree ? tags[1].text : tags[2].text}
                </text>
              </g>
              {!tagsLengthThree && (
                <g>
                  <circle
                    className="fill-yellow"
                    cx="89.67"
                    cy="281.76"
                    r="4.89"
                  />
                  <text
                    className="font-roboto text-xs font-light fill-yellow"
                    transform="translate(117.69 286.65)"
                  >
                    {tags[3].text}
                  </text>
                </g>
              )}
              <g>
                <circle
                  className="fill-yellow"
                  cx="30.24"
                  cy="346.32"
                  r="4.89"
                />
                <text
                  className="font-roboto text-xs font-light fill-yellow"
                  transform="translate(58.26 351.21)"
                >
                   {tagsLengthThree ? tags[2].text : tags[4].text}
                </text>
              </g>
            </g>
            <rect
              x="-997.88"
              y="188.98"
              className="fill-none stroke-yellow"
              width="772.81"
              height="15.98"
            />
          </switch>
        </svg>
      ) : (
        <svg
          version="1.1"
          id="Шар_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          
          className=""
        >
          <switch>
            <g>
              <g>
                <circle
                  className="fill-yellow stroke-yellow stroke-1"
                  cx="951.51"
                  cy="62.35"
                  r="4.89"
                />
                <text
                  transform="matrix(1 0 0 1 900.9774 67.2402)"
                  className="font-halvetica fill-yellow text-xs"
                  textAnchor="end"
                >
                  {tags[0].text}
                </text>
              </g>
              <g>
                <circle
                  className="fill-yellow stroke-yellow stroke-1"
                  cx="896.5"
                  cy="121.03"
                  r="4.89"
                />
                <text
                  transform="matrix(1 0 0 1 842.9923 125.9224)"
                  className="font-halvetica fill-yellow text-xs"
                  textAnchor="end"
                >
                  {tags[1].text}
                </text>
              </g>
              <g>
                <circle
                  className="fill-yellow stroke-yellow stroke-1"
                  cx="874.78"
                  cy="194.84"
                  r="4.89"
                />
                <text
                  transform="matrix(1 0 0 1 803.838 199.7305)"
                  className="font-halvetica fill-yellow text-xs"
                  textAnchor="end"
                >
                  {tags[2].text}
                </text>
              </g>
              <g>
                <circle
                  className="fill-yellow stroke-yellow stroke-1"
                  cx="893.11"
                  cy="281.72"
                  r="4.89"
                />
                <text
                  transform="matrix(1 0 0 1 842.3599 286.6105)"
                  className="font-halvetica fill-yellow text-xs"
                  textAnchor="end"
                >
                  {tags[3].text}
                </text>
              </g>
              <g>
                <circle
                  className="fill-yellow stroke-yellow stroke-1"
                  cx="950.13"
                  cy="346.18"
                  r="4.89"
                />
                <text
                  transform="matrix(1 0 0 1 900.7078 351.0677)"
                  className="font-halvetica fill-yellow text-xs"
                  textAnchor="end"
                >
                  {tags[4].text}
                </text>
              </g>
              <path
                className="fill-none stroke-yellow stroke-1"
                d="M1040.94,372.39c-91.6,0-166.03-74.87-166.03-167.43c0-92.56,74.43-167.43,166.03-167.43c91.6,0,166.03,74.87,166.03,167.43C1206.97,297.52,1132.54,372.39,1040.94,372.39z"
              />
            </g>
          </switch>
        </svg>
      )}
    </div>
  );
}

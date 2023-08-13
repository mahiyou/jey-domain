export interface Currency {
  title: string;
}
export interface Cost {
  amount: number;
  currency: Currency;
}
export interface Domain {
    name: string;
    tld: string;
  }
export interface DomainAvailabilityCheckResponse {
  domain: string;
  available: boolean;
  suggestions: Array<{
    domain: Domain;
    cost: Cost;
  }>;
}

export interface DomainAvailableResponse extends DomainAvailabilityCheckResponse {
  available: true;
  cost: Cost;
}
export interface DomainNotAvailableResponse extends DomainAvailabilityCheckResponse {
  available: false;
}

export function domainAvailabilityCheck(domain: string): DomainAvailableResponse | DomainNotAvailableResponse {
    const available = Math.random() > 0.5;
    const currency: Currency = {
        title: "هزار تومان"
    };
    const suggestions = [
        {
            domain:{
                name:"sa",
                tld:"com"
            },
            cost: {
                amount: Math.floor(Math.random() * 1000),
                currency: currency
            }
        },
        {
            domain:{
                name:"sdf",
                tld:"com"
            },
            cost: {
                amount: Math.floor(Math.random() * 1000),
                currency: currency
            }
        },
        {
            domain:{
                name:"dw",
                tld:"com"
            },
            cost: {
                amount: Math.floor(Math.random() * 1000),
                currency: currency
            }
        },
        {
            domain:{
                name:"efsfw",
                tld:"com"
            },
            cost: {
                amount: Math.floor(Math.random() * 1000),
                currency: currency
            }
        },
        {
            domain:{
                name:"fbbb",
                tld:"com"
            },
            cost: {
                amount: Math.floor(Math.random() * 1000),
                currency: currency
            }
        },
        {
            domain:{
                name:"ffdggb",
                tld:"com"
            },
            cost: {
                amount: Math.floor(Math.random() * 1000),
                currency: currency
            }
        },
        {
            domain:{
                name:"ffd556",
                tld:"com"
            },
            cost: {
                amount: Math.floor(Math.random() * 1000),
                currency: currency
            }
        },
        {
            domain:{
                name:"frrw5",
                tld:"com"
            },
            cost: {
                amount: Math.floor(Math.random() * 1000),
                currency: currency
            }
        }
    ];
    if (available) {
        return {
            available: available,
            domain: domain,
            cost: {
                amount: Math.floor(Math.random() * 1000),
                currency: currency
            },
            suggestions: suggestions,
        };
    }
    return {
        available: available,
        domain: domain,
        suggestions: suggestions,
    };
}
